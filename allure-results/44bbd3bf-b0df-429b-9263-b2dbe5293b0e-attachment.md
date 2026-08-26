# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/05_PageObjectModelTest.spec.ts >> Page Object Model Test in Playwright
- Location: tests/Chapter05/05_PageObjectModelTest.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Playwright by Testers Talk☑️ - YouTube' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e6]:
    - link "Yahoo" [ref=e7] [cursor=pointer]:
      - /url: https://www.yahoo.com
    - button "Settings" [ref=e9] [cursor=pointer]
    - link "Sign In" [ref=e11] [cursor=pointer]:
      - /url: https://login.yahoo.com/;_ylt=Awrg49vqumxqNgIAJfZXNyoA?.intl=us&.lang=en-US&pspid=2766679&.src=search&.done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk&activity=header-signin
      - generic [ref=e12]: Sign In
    - search [ref=e14]:
      - generic [ref=e16]:
        - combobox "Search the web" [ref=e17]: Playwright by Testers Talk
        - generic [ref=e18]:
          - button "Clear" [ref=e20] [cursor=pointer]:
            - img [ref=e21]
          - button "Search by voice" [ref=e24] [cursor=pointer]
          - button "Search" [ref=e26] [cursor=pointer]:
            - img [ref=e27]
  - generic [ref=e30]:
    - list:
      - listitem [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e33]:
            - list:
              - listitem [ref=e34]:
                - link "All" [disabled] [ref=e35]
              - listitem [ref=e36]:
                - link "Videos" [ref=e37] [cursor=pointer]:
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIAJvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e38]:
                - link "Images" [ref=e39] [cursor=pointer]:
                  - /url: https://images.search.yahoo.com/search/images;_ylt=Awrg49vqumxqNgIAJ_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e40]:
                - link "News" [ref=e41] [cursor=pointer]:
                  - /url: https://news.search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAKPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
          - link "More" [ref=e43] [cursor=pointer]:
            - /url: "#"
            - text: More
      - listitem [ref=e45]:
        - button "Anytime" [ref=e48] [cursor=pointer]:
          - generic [ref=e49]: Anytime
  - document [ref=e51]:
    - generic [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading "Search Results" [level=2] [ref=e59]
          - list [ref=e60]:
            - listitem [ref=e61]:
              - generic [ref=e63]:
                - heading "Videos" [level=3] [ref=e65]:
                  - link "Videos" [ref=e66] [cursor=pointer]:
                    - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIAM_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp
                - region "carousel" [ref=e67]:
                  - group "Item 1 of 3" [ref=e68]:
                    - 'link "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial 8:55:09 YouTube #1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial Jan 8, 2025 204.5K Views" [ref=e70] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIAMPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOVP.Q3hgFUELPWnG6uQ8RluLiQEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D788GvvcfwTY&tit=%231+Playwright+Automation+Using+TypeScript+Full+Course+2026+%7C+Playwright+TypeScript+Beginner+Tutorial&pos=01&vid=c1726d1a96727d9f5219c32f37125ff9&sigr=BTQ9uzsNhWXA&sigt=uFacVW5e8YXB&sigi=mGZCy.BhVcGy
                      - generic [ref=e73]:
                        - img "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial" [ref=e75]
                        - generic [ref=e76]: 8:55:09
                      - generic [ref=e77]:
                        - paragraph [ref=e78]: YouTube
                        - paragraph [ref=e79]:
                          - generic [ref=e80]: "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
                        - paragraph [ref=e81]: Jan 8, 2025
                        - paragraph [ref=e82]: 204.5K Views
                  - group "Item 2 of 3" [ref=e83]:
                    - 'link "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot 1:13:40 YouTube #5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot Aug 27, 2025 23.8K Views" [ref=e85] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIAMfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.g3szycTo-FwMLztmBuG8ogEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Vk2mlX1XYM&tit=%235+Playwright+MCP+with+Banking+Project+%7C+Build+Playwright+Framework+%26+Tests+using+AI+GitHub+Copilot&pos=11&vid=3407d02f4a594a2b458fa2c334728441&sigr=xMhsAfUP4y8F&sigt=8UrT947fenoA&sigi=uATFQggN.m.X
                      - generic [ref=e88]:
                        - img "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot" [ref=e90]
                        - generic [ref=e91]: 1:13:40
                      - generic [ref=e92]:
                        - paragraph [ref=e93]: YouTube
                        - paragraph [ref=e94]:
                          - generic [ref=e95]: "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot"
                        - paragraph [ref=e96]: Aug 27, 2025
                        - paragraph [ref=e97]: 23.8K Views
                  - group "Item 3 of 3" [ref=e98]:
                    - 'link "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions 4:33 YouTube #104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions Dec 17, 2025 914 Views" [ref=e100] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIAMvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.S4j8QHFR4r6-CrjLupW2LwEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeU97jYluRPA&tit=%23104+How+to+Run+Playwright+Automation+Tests+Using+GitHub+Actions+CI%2FCD+%7C+Auto+Trigger+GitHub+Actions&pos=21&vid=203e3d74f86ba524c1ada56c21152c48&sigr=qcg8g_nW_P2S&sigt=jvQ4Z7_ZXBeh&sigi=EJkBz.XHrsqV
                      - generic [ref=e103]:
                        - img "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions" [ref=e105]
                        - generic [ref=e106]: 4:33
                      - generic [ref=e107]:
                        - paragraph [ref=e108]: YouTube
                        - paragraph [ref=e109]:
                          - generic [ref=e110]: "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions"
                        - paragraph [ref=e111]: Dec 17, 2025
                        - paragraph [ref=e112]: 914 Views
                - link "View all" [ref=e114] [cursor=pointer]:
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awrg49vqumxqNgIANPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp
                  - text: View all
            - listitem [ref=e116]:
              - generic [ref=e117]:
                - link "YouTube https://www.youtube.com › playlist Playwright by Testers Talk - YouTube" [ref=e119] [cursor=pointer]:
                  - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
                  - generic [ref=e120]:
                    - img [ref=e122]
                    - generic [ref=e123]:
                      - generic [ref=e124]: YouTube
                      - text: https://www.youtube.com › playlist
                  - heading "Playwright by Testers Talk - YouTube" [level=3] [ref=e125]:
                    - generic [ref=e126]: Playwright by Testers Talk - YouTube
                - paragraph [ref=e128]: "Playwright #2 What is Playwright? Advantages & Limitations. Playwright by Testers Talk Playwright tutorial playwright automation playwright automation tutorial playwright vs cypress..."
            - listitem [ref=e129]:
              - generic [ref=e130]:
                - heading "Searches related to Playwright by Testers Talk" [level=2] [ref=e132]
                - table [ref=e133]:
                  - rowgroup [ref=e134]:
                    - row "playwright by testers talk script playwright by testers talk ai" [ref=e135]:
                      - cell "playwright by testers talk script" [ref=e136]:
                        - link "playwright by testers talk script" [ref=e137] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIANvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk script" [ref=e138]
                      - cell "playwright by testers talk ai" [ref=e139]:
                        - link "playwright by testers talk ai" [ref=e140] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAOvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk ai" [ref=e141]
                    - row "playwright by testers talk show playwright by testers talk download" [ref=e142]:
                      - cell "playwright by testers talk show" [ref=e143]:
                        - link "playwright by testers talk show" [ref=e144] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAN_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk show" [ref=e145]
                      - cell "playwright by testers talk download" [ref=e146]:
                        - link "playwright by testers talk download" [ref=e147] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAO_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk download" [ref=e148]
                    - row "playwright by testers talk about different playwright by testers talk about time" [ref=e149]:
                      - cell "playwright by testers talk about different" [ref=e150]:
                        - link "playwright by testers talk about different" [ref=e151] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAOPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about different" [ref=e152]
                      - cell "playwright by testers talk about time" [ref=e153]:
                        - link "playwright by testers talk about time" [ref=e154] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAPPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about time" [ref=e155]
                    - row "playwright by testers talk about data playwright by testers talk app" [ref=e156]:
                      - cell "playwright by testers talk about data" [ref=e157]:
                        - link "playwright by testers talk about data" [ref=e158] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAOfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about data" [ref=e159]
                      - cell "playwright by testers talk app" [ref=e160]:
                        - link "playwright by testers talk app" [ref=e161] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAPfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk app" [ref=e162]
            - listitem [ref=e163]:
              - generic [ref=e164]:
                - link "YouTube https://www.youtube.com › @testerstalk Testers Talk - YouTube" [ref=e166] [cursor=pointer]:
                  - /url: https://www.youtube.com/@testerstalk
                  - generic [ref=e167]:
                    - img [ref=e169]
                    - generic [ref=e170]:
                      - generic [ref=e171]: YouTube
                      - text: https://www.youtube.com › @testerstalk
                  - heading "Testers Talk - YouTube" [level=3] [ref=e172]:
                    - generic [ref=e173]: Testers Talk - YouTube
                - paragraph [ref=e175]: Playwright is an open-source automation library for browser testing.
            - listitem [ref=e176]:
              - generic [ref=e177]:
                - link "Github https://github.com › BakkappaN BakkappaN (Testers Talk) · GitHub" [ref=e179] [cursor=pointer]:
                  - /url: https://github.com/BakkappaN/
                  - generic [ref=e180]:
                    - img [ref=e182]
                    - generic [ref=e183]:
                      - generic [ref=e184]: Github
                      - text: https://github.com › BakkappaN
                  - heading "BakkappaN (Testers Talk) · GitHub" [level=3] [ref=e185]:
                    - generic [ref=e186]: BakkappaN (Testers Talk) · GitHub
                - paragraph [ref=e188]: In this Playwright with TypeScript Tutorial Full Course covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKm…
            - listitem [ref=e189]:
              - generic [ref=e190]:
                - link "Medium https://medium.com › @testerstalk Testers Talk – Medium" [ref=e192] [cursor=pointer]:
                  - /url: https://medium.com/@testerstalk
                  - generic [ref=e193]:
                    - img [ref=e195]
                    - generic [ref=e196]:
                      - generic [ref=e197]: Medium
                      - text: https://medium.com › @testerstalk
                  - heading "Testers Talk – Medium" [level=3] [ref=e198]:
                    - generic [ref=e199]: Testers Talk – Medium
                - paragraph [ref=e201]: Jul 1, 2025 · This guide explains how to integrate Playwright’s Model Context Protocol (MCP) with Claude AI to enable smarter, context-aware automation… Testers Talk · Jun 16, 2025
            - listitem [ref=e202]:
              - generic [ref=e203]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site Playwright_TypeScript_FullCourse_By_TestersTalk" [ref=e205] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/Playwright_TypeScript_FullCourse_By_TestersTalk.pdf
                  - generic [ref=e206]:
                    - img [ref=e208]
                    - generic [ref=e209]:
                      - generic [ref=e210]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "Playwright_TypeScript_FullCourse_By_TestersTalk" [level=3] [ref=e211]:
                    - generic [ref=e212]: Playwright_TypeScript_FullCourse_By_TestersTalk
                - paragraph [ref=e214]: Playwright's expect is powerful and provides a rich set of matchers for various types of checks, such as checking element visibility, text content, existence etc.
            - listitem [ref=e215]:
              - generic [ref=e216]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site playwright FULL COURSE BY Testers talk [Bakkappa N]" [ref=e218] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/FullCourseDocuments/Playwright_JavaScript_Course_by_Testers_Talk_Document.docx
                  - generic [ref=e219]:
                    - img [ref=e221]
                    - generic [ref=e222]:
                      - generic [ref=e223]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "playwright FULL COURSE BY Testers talk [Bakkappa N]" [level=3] [ref=e224]:
                    - generic [ref=e225]: playwright FULL COURSE BY Testers talk [Bakkappa N]
                - paragraph [ref=e227]: Playwright uses CDP to communicate with chromium or chrome browser, similarly playwright has implemented CDP to communicate with other browser such as firefox webkit etc.
            - listitem [ref=e228]:
              - generic [ref=e229]:
                - link "Scribd https://www.scribd.com › document › 990516644 Playwright TypeScript FullCourse by TestersTalk" [ref=e231] [cursor=pointer]:
                  - /url: https://www.scribd.com/document/990516644/Playwright-TypeScript-FullCourse-by-TestersTalk
                  - generic [ref=e232]:
                    - img [ref=e234]
                    - generic [ref=e235]:
                      - generic [ref=e236]: Scribd
                      - text: https://www.scribd.com › document › 990516644
                  - heading "Playwright TypeScript FullCourse by TestersTalk" [level=3] [ref=e237]:
                    - generic [ref=e238]: Playwright TypeScript FullCourse by TestersTalk
                - paragraph [ref=e240]: The document outlines a comprehensive course on Playwright with TypeScript, covering topics such as installation, architecture, locators, assertions, API automation, and integration with CI/CD tools like Jenkins and Azure DevOps.
        - list [ref=e241]:
          - listitem [ref=e242]:
            - generic [ref=e243]:
              - heading "Searches related to Playwright by Testers Talk" [level=2] [ref=e245]
              - table [ref=e246]:
                - rowgroup [ref=e247]:
                  - row "playwright by testers talk script playwright by testers talk about different" [ref=e248]:
                    - cell "playwright by testers talk script" [ref=e249]:
                      - link "playwright by testers talk script" [ref=e250] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIARPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk script" [ref=e251]: playwright by testers talk script
                    - cell "playwright by testers talk about different" [ref=e252]:
                      - link "playwright by testers talk about different" [ref=e253] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIASPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about different" [ref=e254]: playwright by testers talk about different
                  - row "playwright by testers talk show playwright by testers talk ai" [ref=e255]:
                    - cell "playwright by testers talk show" [ref=e256]:
                      - link "playwright by testers talk show" [ref=e257] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIARfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk show" [ref=e258]: playwright by testers talk show
                    - cell "playwright by testers talk ai" [ref=e259]:
                      - link "playwright by testers talk ai" [ref=e260] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIASfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk ai" [ref=e261]: playwright by testers talk ai
                  - row "playwright by testers talk about data playwright by testers talk about time" [ref=e262]:
                    - cell "playwright by testers talk about data" [ref=e263]:
                      - link "playwright by testers talk about data" [ref=e264] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIARvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about data" [ref=e265]: playwright by testers talk about data
                    - cell "playwright by testers talk about time" [ref=e266]:
                      - link "playwright by testers talk about time" [ref=e267] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIASvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about time" [ref=e268]: playwright by testers talk about time
                  - row "playwright by testers talk download playwright by testers talk app" [ref=e269]:
                    - cell "playwright by testers talk download" [ref=e270]:
                      - link "playwright by testers talk download" [ref=e271] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAR_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk download" [ref=e272]: playwright by testers talk download
                    - cell "playwright by testers talk app" [ref=e273]:
                      - link "playwright by testers talk app" [ref=e274] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAS_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk app" [ref=e275]: playwright by testers talk app
      - list [ref=e276]:
        - listitem [ref=e277]:
          - generic [ref=e279]:
            - generic [ref=e280]:
              - strong [ref=e281]: "1"
              - link "2" [ref=e282] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIATPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
              - link "3" [ref=e283] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIATfZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=15&pz=7&bct=0&xargs=0
              - link "4" [ref=e284] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIATvZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=22&pz=7&bct=0&xargs=0
              - link "5" [ref=e285] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAT_ZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=29&pz=7&bct=0&xargs=0
            - link ". . . Next" [ref=e286] [cursor=pointer]:
              - /url: https://search.yahoo.com/search;_ylt=Awrg49vqumxqNgIAUPZXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
        - listitem
  - contentinfo [ref=e289]:
    - list [ref=e290]:
      - listitem [ref=e291]:
        - link "Help" [ref=e292] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awrg49vqumxqNgIAUfZXNyoA
      - listitem [ref=e293]:
        - link "Suggestions" [ref=e294] [cursor=pointer]:
          - /url: https://yahoo.uservoice.com/forums/193847-search
      - listitem [ref=e295]:
        - link "Terms" [ref=e296] [cursor=pointer]:
          - /url: https://guce.yahoo.com/terms?locale=en-US
      - listitem [ref=e297]:
        - link "Privacy" [ref=e298] [cursor=pointer]:
          - /url: https://guce.yahoo.com/privacy-policy?locale=en-US
      - listitem [ref=e299]:
        - link "Privacy Dashboard" [ref=e300] [cursor=pointer]:
          - /url: https://guce.yahoo.com/privacy-dashboard?locale=en-US&done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk
      - listitem [ref=e301]:
        - link "Advertise" [ref=e302] [cursor=pointer]:
          - /url: https://advertising.yahoo.com/article/search-advertising.html
      - listitem [ref=e303]:
        - link "About ads" [ref=e304] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awrg49vqumxqNgIAV_ZXNyoA
      - listitem [ref=e305]:
        - link "About this page" [ref=e306] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awrg49vqumxqNgIAWPZXNyoA?impressions=true
      - listitem [ref=e307]: Powered by Bing™
```

# Test source

```ts
  1  | import { Page, Locator } from "playwright";
  2  | 
  3  | export class SearchResultsPage {
  4  | 
  5  |     readonly page:Page;  //page reference variable.
  6  |     readonly resultLink:Locator;
  7  | 
  8  |     constructor(page:Page) {  //argument page of Page type. Once we get page reference from test file, we need to assign back to local page reference.
  9  |         this.page = page;
  10 | 
  11 |         //Declare all the elements
  12 |         this.resultLink = page.getByText("Playwright by Testers Talk - YouTube");
  13 |     }
  14 | 
  15 |     //implement all the methods which perform actions on the objects of this page   .
  16 |     
  17 |     async clickOnTheLink(linkName:string){
> 18 |         await this.page.getByRole('link', {name: linkName}).first().click();
     |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |     }
  20 | 
  21 | }
```