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
  - waiting for getByRole('link', { name: 'Playwright by Testers Talk/☑️/ - YouTube' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - link "Yahoo" [ref=e6] [cursor=pointer]:
      - /url: https://www.yahoo.com
    - button "Settings" [ref=e8] [cursor=pointer]
    - link "Sign In" [ref=e10] [cursor=pointer]:
      - /url: https://login.yahoo.com/;_ylt=Awr49Ukju2xqYgIAHSdXNyoA?.intl=us&.lang=en-US&pspid=2766679&.src=search&.done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk&activity=header-signin
      - generic [ref=e11]: Sign In
    - search [ref=e13]:
      - generic [ref=e15]:
        - combobox "Search the web" [ref=e16]: Playwright by Testers Talk
        - generic [ref=e17]:
          - button "Clear" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
          - button "Search by voice" [ref=e23] [cursor=pointer]
          - button "Search" [ref=e25] [cursor=pointer]:
            - img [ref=e26]
  - generic [ref=e29]:
    - list:
      - listitem [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]:
            - list:
              - listitem [ref=e33]:
                - link "All" [disabled] [ref=e34]
              - listitem [ref=e35]:
                - link "Videos" [ref=e36] [cursor=pointer]:
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIAHidXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e37]:
                - link "Images" [ref=e38] [cursor=pointer]:
                  - /url: https://images.search.yahoo.com/search/images;_ylt=Awr49Ukju2xqYgIAHydXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e39]:
                - link "News" [ref=e40] [cursor=pointer]:
                  - /url: https://news.search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAICdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk&fr2=piv-web&fr=sfp
          - link "More" [ref=e42] [cursor=pointer]:
            - /url: "#"
            - text: More
      - listitem [ref=e44]:
        - button "Anytime" [ref=e47] [cursor=pointer]:
          - generic [ref=e48]: Anytime
  - document [ref=e50]:
    - generic [ref=e54]:
      - generic [ref=e56]:
        - generic [ref=e57]:
          - heading "Search Results" [level=2] [ref=e58]
          - list [ref=e59]:
            - listitem [ref=e60]:
              - generic [ref=e62]:
                - heading "Videos" [level=3] [ref=e64]:
                  - link "Videos" [ref=e65] [cursor=pointer]:
                    - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIAKydXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp
                - region "carousel" [ref=e66]:
                  - group "Item 1 of 3" [ref=e67]:
                    - 'link "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial 8:55:09 YouTube #1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial Jan 8, 2025 204.5K Views" [ref=e69] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIAKCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOVP.Q3hgFUELPWnG6uQ8RluLiQEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D788GvvcfwTY&tit=%231+Playwright+Automation+Using+TypeScript+Full+Course+2026+%7C+Playwright+TypeScript+Beginner+Tutorial&pos=01&vid=c1726d1a96727d9f5219c32f37125ff9&sigr=BTQ9uzsNhWXA&sigt=uFacVW5e8YXB&sigi=mGZCy.BhVcGy
                      - generic [ref=e72]:
                        - img "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial" [ref=e74]
                        - generic [ref=e75]: 8:55:09
                      - generic [ref=e76]:
                        - paragraph [ref=e77]: YouTube
                        - paragraph [ref=e78]:
                          - generic [ref=e79]: "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
                        - paragraph [ref=e80]: Jan 8, 2025
                        - paragraph [ref=e81]: 204.5K Views
                  - group "Item 2 of 3" [ref=e82]:
                    - 'link "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot 1:13:40 YouTube #5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot Aug 27, 2025 23.8K Views" [ref=e84] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIAKSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.g3szycTo-FwMLztmBuG8ogEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Vk2mlX1XYM&tit=%235+Playwright+MCP+with+Banking+Project+%7C+Build+Playwright+Framework+%26+Tests+using+AI+GitHub+Copilot&pos=11&vid=3407d02f4a594a2b458fa2c334728441&sigr=xMhsAfUP4y8F&sigt=8UrT947fenoA&sigi=uATFQggN.m.X
                      - generic [ref=e87]:
                        - img "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot" [ref=e89]
                        - generic [ref=e90]: 1:13:40
                      - generic [ref=e91]:
                        - paragraph [ref=e92]: YouTube
                        - paragraph [ref=e93]:
                          - generic [ref=e94]: "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot"
                        - paragraph [ref=e95]: Aug 27, 2025
                        - paragraph [ref=e96]: 23.8K Views
                  - group "Item 3 of 3" [ref=e97]:
                    - 'link "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions 4:33 YouTube #104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions Dec 17, 2025 914 Views" [ref=e99] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIAKidXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.S4j8QHFR4r6-CrjLupW2LwEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeU97jYluRPA&tit=%23104+How+to+Run+Playwright+Automation+Tests+Using+GitHub+Actions+CI%2FCD+%7C+Auto+Trigger+GitHub+Actions&pos=21&vid=203e3d74f86ba524c1ada56c21152c48&sigr=qcg8g_nW_P2S&sigt=jvQ4Z7_ZXBeh&sigi=EJkBz.XHrsqV
                      - generic [ref=e102]:
                        - img "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions" [ref=e104]
                        - generic [ref=e105]: 4:33
                      - generic [ref=e106]:
                        - paragraph [ref=e107]: YouTube
                        - paragraph [ref=e108]:
                          - generic [ref=e109]: "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions"
                        - paragraph [ref=e110]: Dec 17, 2025
                        - paragraph [ref=e111]: 914 Views
                - link "View all" [ref=e113] [cursor=pointer]:
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awr49Ukju2xqYgIALCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk&fr=sfp
                  - text: View all
            - listitem [ref=e115]:
              - generic [ref=e116]:
                - link "YouTube https://www.youtube.com › playlist Playwright by Testers Talk - YouTube" [ref=e118] [cursor=pointer]:
                  - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
                  - generic [ref=e119]:
                    - img [ref=e121]
                    - generic [ref=e122]:
                      - generic [ref=e123]: YouTube
                      - text: https://www.youtube.com › playlist
                  - heading "Playwright by Testers Talk - YouTube" [level=3] [ref=e124]:
                    - generic [ref=e125]: Playwright by Testers Talk - YouTube
                - paragraph [ref=e127]: "Playwright #2 What is Playwright? Advantages & Limitations. Playwright by Testers Talk Playwright tutorial playwright automation playwright automation tutorial playwright vs cypress..."
            - listitem [ref=e128]:
              - generic [ref=e129]:
                - heading "Searches related to Playwright by Testers Talk" [level=2] [ref=e131]
                - table [ref=e132]:
                  - rowgroup [ref=e133]:
                    - row "playwright by testers talk script playwright by testers talk ai" [ref=e134]:
                      - cell "playwright by testers talk script" [ref=e135]:
                        - link "playwright by testers talk script" [ref=e136] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIALidXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk script" [ref=e137]
                      - cell "playwright by testers talk ai" [ref=e138]:
                        - link "playwright by testers talk ai" [ref=e139] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAMidXNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk ai" [ref=e140]
                    - row "playwright by testers talk show playwright by testers talk download" [ref=e141]:
                      - cell "playwright by testers talk show" [ref=e142]:
                        - link "playwright by testers talk show" [ref=e143] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIALydXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk show" [ref=e144]
                      - cell "playwright by testers talk download" [ref=e145]:
                        - link "playwright by testers talk download" [ref=e146] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAMydXNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk download" [ref=e147]
                    - row "playwright by testers talk about different playwright by testers talk about time" [ref=e148]:
                      - cell "playwright by testers talk about different" [ref=e149]:
                        - link "playwright by testers talk about different" [ref=e150] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAMCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about different" [ref=e151]
                      - cell "playwright by testers talk about time" [ref=e152]:
                        - link "playwright by testers talk about time" [ref=e153] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIANCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about time" [ref=e154]
                    - row "playwright by testers talk about data playwright by testers talk app" [ref=e155]:
                      - cell "playwright by testers talk about data" [ref=e156]:
                        - link "playwright by testers talk about data" [ref=e157] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAMSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk about data" [ref=e158]
                      - cell "playwright by testers talk app" [ref=e159]:
                        - link "playwright by testers talk app" [ref=e160] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIANSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "playwright by testers talk app" [ref=e161]
            - listitem [ref=e162]:
              - generic [ref=e163]:
                - link "YouTube https://www.youtube.com › @testerstalk Testers Talk - YouTube" [ref=e165] [cursor=pointer]:
                  - /url: https://www.youtube.com/@testerstalk
                  - generic [ref=e166]:
                    - img [ref=e168]
                    - generic [ref=e169]:
                      - generic [ref=e170]: YouTube
                      - text: https://www.youtube.com › @testerstalk
                  - heading "Testers Talk - YouTube" [level=3] [ref=e171]:
                    - generic [ref=e172]: Testers Talk - YouTube
                - paragraph [ref=e174]: Playwright is an open-source automation library for browser testing.
            - listitem [ref=e175]:
              - generic [ref=e176]:
                - link "Github https://github.com › BakkappaN BakkappaN (Testers Talk) · GitHub" [ref=e178] [cursor=pointer]:
                  - /url: https://github.com/BakkappaN/
                  - generic [ref=e179]:
                    - img [ref=e181]
                    - generic [ref=e182]:
                      - generic [ref=e183]: Github
                      - text: https://github.com › BakkappaN
                  - heading "BakkappaN (Testers Talk) · GitHub" [level=3] [ref=e184]:
                    - generic [ref=e185]: BakkappaN (Testers Talk) · GitHub
                - paragraph [ref=e187]: In this Playwright with TypeScript Tutorial Full Course covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKm…
            - listitem [ref=e188]:
              - generic [ref=e189]:
                - link "Medium https://medium.com › @testerstalk Testers Talk – Medium" [ref=e191] [cursor=pointer]:
                  - /url: https://medium.com/@testerstalk
                  - generic [ref=e192]:
                    - img [ref=e194]
                    - generic [ref=e195]:
                      - generic [ref=e196]: Medium
                      - text: https://medium.com › @testerstalk
                  - heading "Testers Talk – Medium" [level=3] [ref=e197]:
                    - generic [ref=e198]: Testers Talk – Medium
                - paragraph [ref=e200]: Jul 1, 2025 · This guide explains how to integrate Playwright’s Model Context Protocol (MCP) with Claude AI to enable smarter, context-aware automation… Testers Talk · Jun 16, 2025
            - listitem [ref=e201]:
              - generic [ref=e202]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site Playwright_TypeScript_FullCourse_By_TestersTalk" [ref=e204] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/Playwright_TypeScript_FullCourse_By_TestersTalk.pdf
                  - generic [ref=e205]:
                    - img [ref=e207]
                    - generic [ref=e208]:
                      - generic [ref=e209]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "Playwright_TypeScript_FullCourse_By_TestersTalk" [level=3] [ref=e210]:
                    - generic [ref=e211]: Playwright_TypeScript_FullCourse_By_TestersTalk
                - paragraph [ref=e213]: Playwright's expect is powerful and provides a rich set of matchers for various types of checks, such as checking element visibility, text content, existence etc.
            - listitem [ref=e214]:
              - generic [ref=e215]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site playwright FULL COURSE BY Testers talk [Bakkappa N]" [ref=e217] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/FullCourseDocuments/Playwright_JavaScript_Course_by_Testers_Talk_Document.docx
                  - generic [ref=e218]:
                    - img [ref=e220]
                    - generic [ref=e221]:
                      - generic [ref=e222]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "playwright FULL COURSE BY Testers talk [Bakkappa N]" [level=3] [ref=e223]:
                    - generic [ref=e224]: playwright FULL COURSE BY Testers talk [Bakkappa N]
                - paragraph [ref=e226]: Playwright uses CDP to communicate with chromium or chrome browser, similarly playwright has implemented CDP to communicate with other browser such as firefox webkit etc.
            - listitem [ref=e227]:
              - generic [ref=e228]:
                - link "Scribd https://www.scribd.com › document › 990516644 Playwright TypeScript FullCourse by TestersTalk" [ref=e230] [cursor=pointer]:
                  - /url: https://www.scribd.com/document/990516644/Playwright-TypeScript-FullCourse-by-TestersTalk
                  - generic [ref=e231]:
                    - img [ref=e233]
                    - generic [ref=e234]:
                      - generic [ref=e235]: Scribd
                      - text: https://www.scribd.com › document › 990516644
                  - heading "Playwright TypeScript FullCourse by TestersTalk" [level=3] [ref=e236]:
                    - generic [ref=e237]: Playwright TypeScript FullCourse by TestersTalk
                - paragraph [ref=e239]: The document outlines a comprehensive course on Playwright with TypeScript, covering topics such as installation, architecture, locators, assertions, API automation, and integration with CI/CD tools like Jenkins and Azure DevOps.
        - list [ref=e240]:
          - listitem [ref=e241]:
            - generic [ref=e242]:
              - heading "Searches related to Playwright by Testers Talk" [level=2] [ref=e244]
              - table [ref=e245]:
                - rowgroup [ref=e246]:
                  - row "playwright by testers talk script playwright by testers talk about different" [ref=e247]:
                    - cell "playwright by testers talk script" [ref=e248]:
                      - link "playwright by testers talk script" [ref=e249] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAPCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk script" [ref=e250]: playwright by testers talk script
                    - cell "playwright by testers talk about different" [ref=e251]:
                      - link "playwright by testers talk about different" [ref=e252] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAQCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about different" [ref=e253]: playwright by testers talk about different
                  - row "playwright by testers talk show playwright by testers talk ai" [ref=e254]:
                    - cell "playwright by testers talk show" [ref=e255]:
                      - link "playwright by testers talk show" [ref=e256] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAPSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk show" [ref=e257]: playwright by testers talk show
                    - cell "playwright by testers talk ai" [ref=e258]:
                      - link "playwright by testers talk ai" [ref=e259] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAQSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk ai" [ref=e260]: playwright by testers talk ai
                  - row "playwright by testers talk about data playwright by testers talk about time" [ref=e261]:
                    - cell "playwright by testers talk about data" [ref=e262]:
                      - link "playwright by testers talk about data" [ref=e263] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAPidXNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about data" [ref=e264]: playwright by testers talk about data
                    - cell "playwright by testers talk about time" [ref=e265]:
                      - link "playwright by testers talk about time" [ref=e266] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAQidXNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk about time" [ref=e267]: playwright by testers talk about time
                  - row "playwright by testers talk download playwright by testers talk app" [ref=e268]:
                    - cell "playwright by testers talk download" [ref=e269]:
                      - link "playwright by testers talk download" [ref=e270] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAPydXNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk download" [ref=e271]: playwright by testers talk download
                    - cell "playwright by testers talk app" [ref=e272]:
                      - link "playwright by testers talk app" [ref=e273] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIAQydXNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "playwright by testers talk app" [ref=e274]: playwright by testers talk app
      - list [ref=e275]:
        - listitem [ref=e276]:
          - generic [ref=e278]:
            - generic [ref=e279]:
              - strong [ref=e280]: "1"
              - link "2" [ref=e281] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIARCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
              - link "3" [ref=e282] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIARSdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=15&pz=7&bct=0&xargs=0
              - link "4" [ref=e283] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIARidXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=22&pz=7&bct=0&xargs=0
              - link "5" [ref=e284] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIARydXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=29&pz=7&bct=0&xargs=0
            - link ". . . Next" [ref=e285] [cursor=pointer]:
              - /url: https://search.yahoo.com/search;_ylt=Awr49Ukju2xqYgIASCdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
        - listitem
  - contentinfo [ref=e288]:
    - list [ref=e289]:
      - listitem [ref=e290]:
        - link "Help" [ref=e291] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awr49Ukju2xqYgIASSdXNyoA
      - listitem [ref=e292]:
        - link "Suggestions" [ref=e293] [cursor=pointer]:
          - /url: https://yahoo.uservoice.com/forums/193847-search
      - listitem [ref=e294]:
        - link "Terms" [ref=e295] [cursor=pointer]:
          - /url: https://guce.yahoo.com/terms?locale=en-US
      - listitem [ref=e296]:
        - link "Privacy" [ref=e297] [cursor=pointer]:
          - /url: https://guce.yahoo.com/privacy-policy?locale=en-US
      - listitem [ref=e298]:
        - link "Privacy Dashboard" [ref=e299] [cursor=pointer]:
          - /url: https://guce.yahoo.com/privacy-dashboard?locale=en-US&done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk
      - listitem [ref=e300]:
        - link "Advertise" [ref=e301] [cursor=pointer]:
          - /url: https://advertising.yahoo.com/article/search-advertising.html
      - listitem [ref=e302]:
        - link "About ads" [ref=e303] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awr49Ukju2xqYgIATydXNyoA
      - listitem [ref=e304]:
        - link "About this page" [ref=e305] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awr49Ukju2xqYgIAUCdXNyoA?impressions=true
      - listitem [ref=e306]: Powered by Bing™
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