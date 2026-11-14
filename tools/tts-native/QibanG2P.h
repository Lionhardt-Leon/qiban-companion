#pragma once
#ifdef __cplusplus
extern "C" {
#endif
// Call on one serial synthesis queue. Returned UTF-8 JSON must be freed.
int qiban_g2p_safety_revision(void);
int qiban_g2p_initialize(const char *resources, const char *modelConfig);
char *qiban_g2p_process(const char *text, const char *language);
void qiban_g2p_free(char *text);
#ifdef __cplusplus
}
#endif
