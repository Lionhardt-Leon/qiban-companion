"""Apply bounded fixes to the pinned Apache-2.0 G2P source before compilation."""
from pathlib import Path

REVISION = 2


def patch(source):
    source = Path(source)
    def edit(relative, replacements):
        path = source / relative
        text = path.read_text(encoding='utf-8')
        if '// Qiban frontend safety revision 2' in text:
            return
        for old, new in replacements:
            assert text.count(old) == 1, (relative, old[:100], text.count(old))
            text = text.replace(old, new)
        path.write_text('// Qiban frontend safety revision 2\n' + text, encoding='utf-8')

    edit('src/text/tone_sandhi.cpp', [
        ('#include <utility>', '#include <utility>\n#include <stdexcept>'),
        ('''  std::string firstSubword = wordList[0];''', '''  if (wordList.empty()) return {word, U""};
  std::string firstSubword = wordList[0];'''),
        ('''  size_t firstBeginIdx = uWord.find(firstSubword);

  std::vector<std::u32string> newWordList;
  if (firstBeginIdx == 0) {
    std::string secondSubword = uWord.substr(firstSubword.size());
    newWordList = {Text::StringToU32String(firstSubword), Text::StringToU32String(secondSubword)};
  } else {
    std::string secondSubword = uWord.substr(0, word.size() - firstSubword.size());
    newWordList = {Text::StringToU32String(secondSubword), Text::StringToU32String(firstSubword)};
  }

  return newWordList;''', '''  // Split in code points, never subtract UTF-8 bytes from a UTF-32 length.
  const auto part = Text::StringToU32String(firstSubword);
  const auto begin = word.find(part);
  const auto cut = begin == 0 ? part.size() : begin == std::u32string::npos ? word.size() : begin;
  return {word.substr(0, cut), word.substr(cut)};'''),
        ('''    if (must_neural_tone_words.find(word_list[i])''', '''    if (finals_list[i].empty()) continue;
    if (must_neural_tone_words.find(word_list[i])'''),
        ('''else if (i == 1 && !all_tone_three(sub)''', '''else if (i == 1 && !sub.empty() && !finals_list[0].empty() && !all_tone_three(sub)'''),
        ('''return std::all_of(finals.begin(), finals.end(), [](const std::string& x) { return x.back() == '3'; });''', '''return !finals.empty() && std::all_of(finals.begin(), finals.end(), [](const std::string& x) { return !x.empty() && x.back() == '3'; });'''),
        ('''  auto r = bu_sandhi(word, finals);''', '''  if (word.empty() || pos.empty() || word.size() != finals.size() ||
      std::any_of(finals.begin(), finals.end(), [](const auto& x) { return x.empty(); }))
    throw std::runtime_error("Mandarin tone alignment is invalid");
  auto r = bu_sandhi(word, finals);'''),
    ])
    edit('src/g2p/g2p_zh.cpp', [
        ('#include <numeric>', '#include <numeric>\n#include <stdexcept>\n#include <algorithm>'),
        ('''  // fix er1''', '''  if (word.empty() || initials.size() != finals.size() || finals.size() != word.size() ||
      std::any_of(finals.begin(), finals.end(), [](const auto& x) { return x.empty(); }))
    throw std::runtime_error("Mandarin erhua alignment is invalid");
  // fix er1'''),
        ('''not_erhua.find(word.substr(word.size() - 2))''', '''not_erhua.find(word.substr(word.size() >= 2 ? word.size() - 2 : 0))'''),
        ('''      std::vector<Pinyin::PinyinRes> lpy''', '''      if (now_word_length > pinyins.size()) throw std::runtime_error("Mandarin token alignment is invalid");
      std::vector<Pinyin::PinyinRes> lpy'''),
        ('''      for (auto &pinyin: word_pinyins)''', '''      if (word_pinyins.size() != u32Word.size()) throw std::runtime_error("Mandarin word alignment is invalid");
      for (auto &pinyin: word_pinyins)'''),
        ('''    assert(initials.size() == finals.size());''', '''    if (initials.size() != finals.size()) throw std::runtime_error("Mandarin phoneme alignment is invalid");'''),
        ('''        assert(punctuation.find(c) != punctuation.end());''', '''        if (punctuation.find(c) == punctuation.end()) throw std::runtime_error("Unsupported Mandarin token");'''),
        ('''        assert(!v.empty());''', '''        if (v.empty()) throw std::runtime_error("Missing Mandarin final");'''),
        ('''        assert(tone == '1' || tone == '2' || tone == '3' || tone == '4' || tone == '5');''', '''        if (tone < '1' || tone > '5') throw std::runtime_error("Invalid Mandarin tone");'''),
        ('''            auto iter1 = single_rep_map.find(pinyin[0]);''', '''            if (pinyin.empty()) throw std::runtime_error("Empty Mandarin syllable");
            auto iter1 = single_rep_map.find(pinyin[0]);'''),
        ('''        auto sp = Text::pinyin_to_symbol_map[pinyin];''', '''        // This table holds string_views into static literals. operator[] would
        // insert a view into this local string, leaving a dangling global key.
        if (pinyin == "n" || pinyin == "m" || pinyin == "hm") pinyin = "en";
        if (pinyin == "ng" || pinyin == "hng") pinyin = "eng";
        const auto symbol = Text::pinyin_to_symbol_map.find(pinyin);
        if (symbol == Text::pinyin_to_symbol_map.end()) throw std::runtime_error("Unsupported Mandarin syllable");
        const auto sp = symbol->second;'''),
        ('''        assert(tmvs.size() == 2);''', '''        if (tmvs.size() != 2 || tmvs[0].empty() || tmvs[1].empty()) throw std::runtime_error("Invalid Mandarin symbol mapping");'''),
        ('''  assert(phones.size() == std::accumulate(word2ph.begin(), word2ph.end(), 0));
  assert(Text::StringToU32String(norm_text).size() == word2ph.size());''', '''  if (phones.size() != std::accumulate(word2ph.begin(), word2ph.end(), 0) ||
      Text::StringToU32String(norm_text).size() != word2ph.size())
    throw std::runtime_error("Mandarin output alignment is invalid");'''),
    ])


if __name__ == '__main__':
    import sys
    patch(sys.argv[1])
