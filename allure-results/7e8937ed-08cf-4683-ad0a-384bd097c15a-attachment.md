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
  - waiting for getByRole('link', { name: 'Cypress by Testers Talk - YouTube' }).first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - link "Yahoo" [ref=e6] [cursor=pointer]:
      - /url: https://www.yahoo.com
    - button "Settings" [ref=e8] [cursor=pointer]
    - link "Sign In" [ref=e10] [cursor=pointer]:
      - /url: https://login.yahoo.com/;_ylt=Awr.zYewumxqTAIATR9XNyoA?.intl=us&.lang=en-US&pspid=2766679&.src=search&.done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DCypress%2Bby%2BTesters%2BTalk&activity=header-signin
      - generic [ref=e11]: Sign In
    - search [ref=e13]:
      - generic [ref=e15]:
        - combobox "Search the web" [ref=e16]: Cypress by Testers Talk
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
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIATh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Cypress+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e37]:
                - link "Images" [ref=e38] [cursor=pointer]:
                  - /url: https://images.search.yahoo.com/search/images;_ylt=Awr.zYewumxqTAIATx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Cypress+by+Testers+Talk&fr2=piv-web&fr=sfp
              - listitem [ref=e39]:
                - link "News" [ref=e40] [cursor=pointer]:
                  - /url: https://news.search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAUB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Cypress+by+Testers+Talk&fr2=piv-web&fr=sfp
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
                    - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIAWx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Cypress+by+Testers+Talk&fr=sfp
                - region "carousel" [ref=e66]:
                  - group "Item 1 of 3" [ref=e67]:
                    - link "Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs 5:4:18 YouTube Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs Oct 3, 2023 81K Views" [ref=e69] [cursor=pointer]:
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIAWB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Cypress+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOVP.Tz6KK3Zgqm7K8HchXWsdxgHgFo%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoJV5whmzfZI&tit=Cypress+Tutorial+Full+Course+%7C+Cypress+Automation+%7C+Learn+Cypress+in+5+Hrs&pos=01&vid=9bfa6f58bd4c4386a36ed99b0a64cde5&sigr=cEjAKsNgme8E&sigt=2l6hPsVDa1uJ&sigi=Z5kCKnPAqLk2
                      - generic [ref=e72]:
                        - img "Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs" [ref=e74]
                        - generic [ref=e75]: 5:4:18
                      - generic [ref=e76]:
                        - paragraph [ref=e77]: YouTube
                        - paragraph [ref=e78]:
                          - generic [ref=e79]: Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs
                        - paragraph [ref=e80]: Oct 3, 2023
                        - paragraph [ref=e81]: 81K Views
                  - group "Item 2 of 3" [ref=e82]:
                    - 'link "Cypress #6 Cypress Studio - Record and Play Test 14:43 YouTube Cypress #6 Cypress Studio - Record and Play Test Oct 17, 2023 11K Views" [ref=e84] [cursor=pointer]':
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIAWR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Cypress+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.i1HMhfTuqaAiXdhkobScmwEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1aQeNbI07Jk&tit=Cypress+%236+Cypress+Studio+-+Record+and+Play+Test&pos=11&vid=0c8c72d5e52206df37720e4ea285a0f9&sigr=p7SMlPERpCf.&sigt=2Tmfi_7EsSBk&sigi=UytIzBPVZkx3
                      - generic [ref=e87]:
                        - 'img "Cypress #6 Cypress Studio - Record and Play Test" [ref=e89]'
                        - generic [ref=e90]: 14:43
                      - generic [ref=e91]:
                        - paragraph [ref=e92]: YouTube
                        - paragraph [ref=e93]:
                          - generic [ref=e94]: "Cypress #6 Cypress Studio - Record and Play Test"
                        - paragraph [ref=e95]: Oct 17, 2023
                        - paragraph [ref=e96]: 11K Views
                  - group "Item 3 of 3" [ref=e97]:
                    - link "Cypress Full Course Overview E2E Web Testing 0:25 YouTube Cypress Full Course Overview E2E Web Testing Oct 10, 2023 1.5K Views" [ref=e99] [cursor=pointer]:
                      - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIAWh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Cypress+by+Testers+Talk&fr=sfp&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOVP.t_80GxkpPjj094UpMg979AEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmFGZN_o1WD0&tit=Cypress+Full+Course+Overview+E2E+Web+Testing&pos=21&vid=950a383e409209dd143632d09bbab6a2&sigr=g9JR2UXpeq3L&sigt=GXlMtjxKeOEA&sigi=ii6uzbgwQ7HR
                      - generic [ref=e102]:
                        - img "Cypress Full Course Overview E2E Web Testing" [ref=e104]
                        - generic [ref=e105]: 0:25
                      - generic [ref=e106]:
                        - paragraph [ref=e107]: YouTube
                        - paragraph [ref=e108]:
                          - generic [ref=e109]: Cypress Full Course Overview E2E Web Testing
                        - paragraph [ref=e110]: Oct 10, 2023
                        - paragraph [ref=e111]: 1.5K Views
                - link "View all" [ref=e113] [cursor=pointer]:
                  - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zYewumxqTAIAXB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Cypress+by+Testers+Talk&fr=sfp
                  - text: View all
            - listitem [ref=e115]:
              - generic [ref=e116]:
                - link "YouTube https://www.youtube.com › playlist Cypress by Testers Talk☑️ - YouTube" [active] [ref=e118] [cursor=pointer]:
                  - /url: https://r.search.yahoo.com/_ylt=Awr.zYewumxqTAIAXR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1786720177/RO=10/RU=https%3a%2f%2fwww.youtube.com%2fplaylist%3flist%3dPLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq/RK=2/RS=m8RkPSDVJR_cnx5LCtNxfawgcOw-
                  - generic [ref=e119]:
                    - img [ref=e121]
                    - generic [ref=e122]:
                      - generic [ref=e123]: YouTube
                      - text: https://www.youtube.com › playlist
                  - heading "Cypress by Testers Talk☑️ - YouTube" [level=3] [ref=e124]:
                    - generic [ref=e125]: Cypress by Testers Talk☑️ - YouTube
                - paragraph [ref=e127]: "Advantages & Limitations of Cypress. Cypress by Testers Talk #cypress #softwaretesting #cypresstutorial #qa #qualityassurance #automationframework #testautomation #automationtesting #sdet..."
            - listitem [ref=e128]:
              - generic [ref=e129]:
                - heading "Searches related to Cypress by Testers Talk" [level=2] [ref=e131]
                - table [ref=e132]:
                  - rowgroup [ref=e133]:
                    - row "cypress by testers talk forum cypress by testers talk youtube" [ref=e134]:
                      - cell "cypress by testers talk forum" [ref=e135]:
                        - link "cypress by testers talk forum" [ref=e136] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAXh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+forum&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk forum" [ref=e137]
                      - cell "cypress by testers talk youtube" [ref=e138]:
                        - link "cypress by testers talk youtube" [ref=e139] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAYh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+youtube&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk youtube" [ref=e140]
                    - row "cypress by testers talk reviews cypress by testers talk about trees" [ref=e141]:
                      - cell "cypress by testers talk reviews" [ref=e142]:
                        - link "cypress by testers talk reviews" [ref=e143] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAXx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+reviews&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk reviews" [ref=e144]
                      - cell "cypress by testers talk about trees" [ref=e145]:
                        - link "cypress by testers talk about trees" [ref=e146] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAYx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+about+trees&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk about trees" [ref=e147]
                    - row "cypress by testers talk app cypress by testers talk show" [ref=e148]:
                      - cell "cypress by testers talk app" [ref=e149]:
                        - link "cypress by testers talk app" [ref=e150] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAYB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk app" [ref=e151]
                      - cell "cypress by testers talk show" [ref=e152]:
                        - link "cypress by testers talk show" [ref=e153] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAZB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk show" [ref=e154]
                    - row "cypress by testers talk download cypress by testers talk podcast" [ref=e155]:
                      - cell "cypress by testers talk download" [ref=e156]:
                        - link "cypress by testers talk download" [ref=e157] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAYR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk download" [ref=e158]
                      - cell "cypress by testers talk podcast" [ref=e159]:
                        - link "cypress by testers talk podcast" [ref=e160] [cursor=pointer]:
                          - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAZR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1taWQ-?p=cypress+by+testers+talk+podcast&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
                          - generic "cypress by testers talk podcast" [ref=e161]
            - listitem [ref=e162]:
              - generic [ref=e163]:
                - link "YouTube https://www.youtube.com › playlist Cypress by Testers - YouTube" [ref=e165] [cursor=pointer]:
                  - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THFdc_Iqw4wyJUX43LUBzd2f
                  - generic [ref=e166]:
                    - img [ref=e168]
                    - generic [ref=e169]:
                      - generic [ref=e170]: YouTube
                      - text: https://www.youtube.com › playlist
                  - heading "Cypress by Testers - YouTube" [level=3] [ref=e171]:
                    - generic [ref=e172]: Cypress by Testers - YouTube
                - paragraph [ref=e174]: "Cypress #1 What is Cypress? Advantages & Limitations of Cypress."
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
                - paragraph [ref=e187]: "In this Playwright with TypeScript Tutorial Full Course covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKm… Cypress Tutorial Full Course #cypress #tutorial #fullcourse #cypresscourse. BakkappaN has no activity yet for this period."
            - listitem [ref=e188]:
              - generic [ref=e189]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site CYPRESS FULL COURSE BY Testers talk [Bakkappa N]" [ref=e191] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/FullCourseDocuments/Cypress_FullCourse_by_Testers_Talk_Document.docx
                  - generic [ref=e192]:
                    - img [ref=e194]
                    - generic [ref=e195]:
                      - generic [ref=e196]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "CYPRESS FULL COURSE BY Testers talk [Bakkappa N]" [level=3] [ref=e197]:
                    - generic [ref=e198]: CYPRESS FULL COURSE BY Testers talk [Bakkappa N]
                - paragraph [ref=e200]: Cypress is an open source/paid automation testing tool based on JavaScript to test modern web application & API’s, Cypress is widely used by Developers and Testers.
            - listitem [ref=e201]:
              - generic [ref=e202]:
                - link "Medium https://medium.com › @testerstalk Testers Talk – Medium" [ref=e204] [cursor=pointer]:
                  - /url: https://medium.com/@testerstalk
                  - generic [ref=e205]:
                    - img [ref=e207]
                    - generic [ref=e208]:
                      - generic [ref=e209]: Medium
                      - text: https://medium.com › @testerstalk
                  - heading "Testers Talk – Medium" [level=3] [ref=e210]:
                    - generic [ref=e211]: Testers Talk – Medium
                - paragraph [ref=e213]: "Jul 1, 2025 · Become Best Tester: Software Testing, Playwright, Cypress, Selenium, Postman, Rest Assured, API Testing, Test Automation, Framework, QA, SDET, Test Automation. Read writing from Testers Talk..."
            - listitem [ref=e214]:
              - generic [ref=e215]:
                - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site Testers Talk Practice Site - bakkappan.github.io" [ref=e217] [cursor=pointer]:
                  - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/
                  - generic [ref=e218]:
                    - img [ref=e220]
                    - generic [ref=e221]:
                      - generic [ref=e222]: bakkappan.github.io
                      - text: https://bakkappan.github.io › Testers-Talk-Practice-Site
                  - heading "Testers Talk Practice Site - bakkappan.github.io" [level=3] [ref=e223]:
                    - generic [ref=e224]: Testers Talk Practice Site - bakkappan.github.io
                - paragraph [ref=e226]: Getting Started with Playwright TypeScript. 2. Locators, Assertions, Hooks, Annotations & Actions. 3. Retry, Repeat, Tags, Visual Testing. 4. Rerun Failed Tests, Browser Context, Popups, Alerts etc. 5. Page Object Model, Video, Environments, Data Driven Testing. 6. API Automation - API Mocking + GET, POST, PUT, PATCH & DELETE. 7.
            - listitem [ref=e227]:
              - generic [ref=e228]:
                - 'link "Github https://github.com › BakkappaN › CypressTutorialFullCourse GitHub - BakkappaN/CypressTutorialFullCourse: Cypress ..." [ref=e230] [cursor=pointer]':
                  - /url: https://github.com/BakkappaN/CypressTutorialFullCourse
                  - generic [ref=e231]:
                    - img [ref=e233]
                    - generic [ref=e234]:
                      - generic [ref=e235]: Github
                      - text: https://github.com › BakkappaN › CypressTutorialFullCourse
                  - 'heading "GitHub - BakkappaN/CypressTutorialFullCourse: Cypress ..." [level=3] [ref=e236]':
                    - generic [ref=e237]: "GitHub - BakkappaN/CypressTutorialFullCourse: Cypress ..."
                - paragraph [ref=e239]: "01 - Cypress Course Overview https://www.youtube.com/watch?v=mFGZN_o1WD0&list=PLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq&index=3. 02 - Cypress Chapter01 Overview End-to-End Testing https://www.youtube.com/watch?v=ktapPLK2DCI&list=PLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq&index=4. 03 - Cypress #1 What is Cypress?"
        - list [ref=e240]:
          - listitem [ref=e241]:
            - generic [ref=e242]:
              - heading "Searches related to Cypress by Testers Talk" [level=2] [ref=e244]
              - table [ref=e245]:
                - rowgroup [ref=e246]:
                  - row "cypress by testers talk forum cypress by testers talk app" [ref=e247]:
                    - cell "cypress by testers talk forum" [ref=e248]:
                      - link "cypress by testers talk forum" [ref=e249] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAbB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+forum&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk forum" [ref=e250]: cypress by testers talk forum
                    - cell "cypress by testers talk app" [ref=e251]:
                      - link "cypress by testers talk app" [ref=e252] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAcB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk app" [ref=e253]: cypress by testers talk app
                  - row "cypress by testers talk reviews cypress by testers talk youtube" [ref=e254]:
                    - cell "cypress by testers talk reviews" [ref=e255]:
                      - link "cypress by testers talk reviews" [ref=e256] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAbR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+reviews&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk reviews" [ref=e257]: cypress by testers talk reviews
                    - cell "cypress by testers talk youtube" [ref=e258]:
                      - link "cypress by testers talk youtube" [ref=e259] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAcR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+youtube&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk youtube" [ref=e260]: cypress by testers talk youtube
                  - row "cypress by testers talk download cypress by testers talk show" [ref=e261]:
                    - cell "cypress by testers talk download" [ref=e262]:
                      - link "cypress by testers talk download" [ref=e263] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAbh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk download" [ref=e264]: cypress by testers talk download
                    - cell "cypress by testers talk show" [ref=e265]:
                      - link "cypress by testers talk show" [ref=e266] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAch9XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk show" [ref=e267]: cypress by testers talk show
                  - row "cypress by testers talk about trees cypress by testers talk podcast" [ref=e268]:
                    - cell "cypress by testers talk about trees" [ref=e269]:
                      - link "cypress by testers talk about trees" [ref=e270] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAbx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+about+trees&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk about trees" [ref=e271]: cypress by testers talk about trees
                    - cell "cypress by testers talk podcast" [ref=e272]:
                      - link "cypress by testers talk podcast" [ref=e273] [cursor=pointer]:
                        - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAcx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1ib3Q-?p=cypress+by+testers+talk+podcast&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
                        - generic "cypress by testers talk podcast" [ref=e274]: cypress by testers talk podcast
      - list [ref=e275]:
        - listitem [ref=e276]:
          - generic [ref=e278]:
            - generic [ref=e279]:
              - strong [ref=e280]: "1"
              - link "2" [ref=e281] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAdB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Cypress+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
              - link "3" [ref=e282] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAdR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Cypress+by+Testers+Talk&b=15&pz=7&bct=0&xargs=0
              - link "4" [ref=e283] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAdh9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Cypress+by+Testers+Talk&b=22&pz=7&bct=0&xargs=0
              - link "5" [ref=e284] [cursor=pointer]:
                - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAdx9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Cypress+by+Testers+Talk&b=29&pz=7&bct=0&xargs=0
            - link ". . . Next" [ref=e285] [cursor=pointer]:
              - /url: https://search.yahoo.com/search;_ylt=Awr.zYewumxqTAIAeB9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Cypress+by+Testers+Talk&b=8&pz=7&bct=0&xargs=0
        - listitem
  - contentinfo [ref=e288]:
    - list [ref=e289]:
      - listitem [ref=e290]:
        - link "Help" [ref=e291] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awr.zYewumxqTAIAeR9XNyoA
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
          - /url: https://guce.yahoo.com/privacy-dashboard?locale=en-US&done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DCypress%2Bby%2BTesters%2BTalk
      - listitem [ref=e300]:
        - link "Advertise" [ref=e301] [cursor=pointer]:
          - /url: https://advertising.yahoo.com/article/search-advertising.html
      - listitem [ref=e302]:
        - link "About ads" [ref=e303] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awr.zYewumxqTAIAfx9XNyoA
      - listitem [ref=e304]:
        - link "About this page" [ref=e305] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awr.zYewumxqTAIAgB9XNyoA?impressions=true
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