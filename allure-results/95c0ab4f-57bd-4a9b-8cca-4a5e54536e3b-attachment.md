# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05/05_PageObjectModelTest.spec.ts >> Page Object Model Test in Playwright
- Location: tests/Chapter05/05_PageObjectModelTest.spec.ts:6:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Playwright by Testers Talk.*"
Received: "Playwright by Testers Talk.* - Yahoo Search Results"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Playwright by Testers Talk.* - Yahoo Search Results"

```

```yaml
- link "Yahoo":
  - /url: https://www.yahoo.com
- button "Settings"
- link "Sign In":
  - /url: https://login.yahoo.com/;_ylt=Awr.zSc_tmxqJwIAzV1XNyoA?.intl=us&.lang=en-US&pspid=2766679&.src=search&.done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk.*&activity=header-signin
- search:
  - combobox "Search the web": Playwright by Testers Talk.*
  - button "Clear":
    - img
  - button "Search by voice"
  - button "Search":
    - img
- list:
  - listitem:
    - list:
      - listitem:
        - link "All" [disabled]
      - listitem:
        - link "Videos":
          - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIAzl1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk.*&fr2=piv-web&fr=sfp
      - listitem:
        - link "Images":
          - /url: https://images.search.yahoo.com/search/images;_ylt=Awr.zSc_tmxqJwIAz11XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk.*&fr2=piv-web&fr=sfp
      - listitem:
        - link "News":
          - /url: https://news.search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA0F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Playwright+by+Testers+Talk.*&fr2=piv-web&fr=sfp
    - link "More":
      - /url: "#"
  - listitem:
    - button "Anytime"
- document:
  - heading "Search Results" [level=2]
  - list:
    - listitem:
      - link "YouTube https://www.youtube.com › playlist Playwright by Testers Talk - YouTube":
        - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
        - text: YouTube https://www.youtube.com › playlist
        - heading "Playwright by Testers Talk - YouTube" [level=3]
      - paragraph: "Playwright #2 What is Playwright? Advantages & Limitations. Playwright by Testers Talk Playwright tutorial playwright automation playwright automation tutorial playwright vs cypress..."
    - listitem:
      - heading "Videos" [level=3]:
        - link "Videos":
          - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIA3F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk.*&fr=sfp
      - region "carousel":
        - group "Item 1 of 3":
          - 'link "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial 8:55:09 YouTube #1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial Jan 8, 2025 204.5K Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIA2V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk.*&fr=sfp&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOVP.Q3hgFUELPWnG6uQ8RluLiQEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D788GvvcfwTY&tit=%231+Playwright+Automation+Using+TypeScript+Full+Course+2026+%7C+Playwright+TypeScript+Beginner+Tutorial&pos=01&vid=c1726d1a96727d9f5219c32f37125ff9&sigr=BTQ9uzsNhWXA&sigt=uFacVW5e8YXB&sigi=mGZCy.BhVcGy
            - img "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
            - text: 8:55:09
            - paragraph: YouTube
            - paragraph: "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
            - paragraph: Jan 8, 2025
            - paragraph: 204.5K Views
        - group "Item 2 of 3":
          - 'link "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot 1:13:40 YouTube #5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot Aug 27, 2025 23.8K Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIA2l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk.*&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.g3szycTo-FwMLztmBuG8ogEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3Vk2mlX1XYM&tit=%235+Playwright+MCP+with+Banking+Project+%7C+Build+Playwright+Framework+%26+Tests+using+AI+GitHub+Copilot&pos=11&vid=3407d02f4a594a2b458fa2c334728441&sigr=xMhsAfUP4y8F&sigt=8UrT947fenoA&sigi=uATFQggN.m.X
            - img "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot"
            - text: 1:13:40
            - paragraph: YouTube
            - paragraph: "#5 Playwright MCP with Banking Project | Build Playwright Framework & Tests using AI GitHub Copilot"
            - paragraph: Aug 27, 2025
            - paragraph: 23.8K Views
        - group "Item 3 of 3":
          - 'link "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions 4:33 YouTube #104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions Dec 17, 2025 914 Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIA211XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk.*&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.S4j8QHFR4r6-CrjLupW2LwEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeU97jYluRPA&tit=%23104+How+to+Run+Playwright+Automation+Tests+Using+GitHub+Actions+CI%2FCD+%7C+Auto+Trigger+GitHub+Actions&pos=21&vid=203e3d74f86ba524c1ada56c21152c48&sigr=qcg8g_nW_P2S&sigt=jvQ4Z7_ZXBeh&sigi=EJkBz.XHrsqV
            - img "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions"
            - text: 4:33
            - paragraph: YouTube
            - paragraph: "#104 How to Run Playwright Automation Tests Using GitHub Actions CI/CD | Auto Trigger GitHub Actions"
            - paragraph: Dec 17, 2025
            - paragraph: 914 Views
      - link "View all":
        - /url: https://video.search.yahoo.com/search/video;_ylt=Awr.zSc_tmxqJwIA3V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=Playwright+by+Testers+Talk.*&fr=sfp
    - listitem:
      - heading "Searches related to Playwright by Testers Talk.*" [level=2]
      - table:
        - rowgroup:
          - row "playwright by testers talk.* in java playwright by testers talk.* class":
            - cell "playwright by testers talk.* in java":
              - link "playwright by testers talk.* in java":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA3l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+in+java&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* class":
              - link "playwright by testers talk.* class":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA4l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+class&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* example playwright by testers talk.* type":
            - cell "playwright by testers talk.* example":
              - link "playwright by testers talk.* example":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA311XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+example&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* type":
              - link "playwright by testers talk.* type":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA411XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+type&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* in python playwright by testers talk.* in spring":
            - cell "playwright by testers talk.* in python":
              - link "playwright by testers talk.* in python":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA4F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+in+python&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* in spring":
              - link "playwright by testers talk.* in spring":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA5F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+in+spring&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* code playwright by testers talk.* 2":
            - cell "playwright by testers talk.* code":
              - link "playwright by testers talk.* code":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA4V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+code&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* 2":
              - link "playwright by testers talk.* 2":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA5V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk.*+2&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
    - listitem:
      - link "YouTube https://www.youtube.com › @testerstalk Testers Talk - YouTube":
        - /url: https://www.youtube.com/@testerstalk
        - text: YouTube https://www.youtube.com › @testerstalk
        - heading "Testers Talk - YouTube" [level=3]
      - paragraph: Playwright is an open-source automation library for browser testing.
    - listitem:
      - link "Medium https://medium.com › @testerstalk Testers Talk – Medium":
        - /url: https://medium.com/@testerstalk
        - text: Medium https://medium.com › @testerstalk
        - heading "Testers Talk – Medium" [level=3]
      - paragraph: Jul 1, 2025 · This guide explains how to integrate Playwright’s Model Context Protocol (MCP) with Claude AI to enable smarter, context-aware automation… Testers Talk · Jun 16, 2025
    - listitem:
      - link "Github https://github.com › BakkappaN BakkappaN (Testers Talk) · GitHub":
        - /url: https://github.com/BakkappaN/
        - text: Github https://github.com › BakkappaN
        - heading "BakkappaN (Testers Talk) · GitHub" [level=3]
      - paragraph: In this Playwright with TypeScript Tutorial Full Course covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKm…
    - listitem:
      - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site Playwright_TypeScript_FullCourse_By_TestersTalk":
        - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/Playwright_TypeScript_FullCourse_By_TestersTalk.pdf
        - text: bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site
        - heading "Playwright_TypeScript_FullCourse_By_TestersTalk" [level=3]
      - paragraph: Playwright's expect is powerful and provides a rich set of matchers for various types of checks, such as checking element visibility, text content, existence etc.
    - listitem:
      - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site playwright FULL COURSE BY Testers talk [Bakkappa N]":
        - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/FullCourseDocuments/Playwright_JavaScript_Course_by_Testers_Talk_Document.docx
        - text: bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site
        - heading "playwright FULL COURSE BY Testers talk [Bakkappa N]" [level=3]
      - paragraph: Playwright uses CDP to communicate with chromium or chrome browser, similarly playwright has implemented CDP to communicate with other browser such as firefox webkit etc.
    - listitem:
      - link "Scribd https://www.scribd.com › document › 990516644 Playwright TypeScript FullCourse by TestersTalk":
        - /url: https://www.scribd.com/document/990516644/Playwright-TypeScript-FullCourse-by-TestersTalk
        - text: Scribd https://www.scribd.com › document › 990516644
        - heading "Playwright TypeScript FullCourse by TestersTalk" [level=3]
      - paragraph: The document outlines a comprehensive course on Playwright with TypeScript, covering topics such as installation, architecture, locators, assertions, API automation, and integration with CI/CD tools like Jenkins and Azure DevOps.
  - list:
    - listitem:
      - heading "Searches related to Playwright by Testers Talk.*" [level=2]
      - table:
        - rowgroup:
          - row "playwright by testers talk.* in java playwright by testers talk.* in python":
            - cell "playwright by testers talk.* in java":
              - link "playwright by testers talk.* in java":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA7F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+in+java&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* in python":
              - link "playwright by testers talk.* in python":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA8F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+in+python&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* example playwright by testers talk.* class":
            - cell "playwright by testers talk.* example":
              - link "playwright by testers talk.* example":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA7V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+example&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* class":
              - link "playwright by testers talk.* class":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA8V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+class&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* code playwright by testers talk.* in spring":
            - cell "playwright by testers talk.* code":
              - link "playwright by testers talk.* code":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA7l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+code&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* in spring":
              - link "playwright by testers talk.* in spring":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA8l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+in+spring&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk.* type playwright by testers talk.* 2":
            - cell "playwright by testers talk.* type":
              - link "playwright by testers talk.* type":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA711XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+type&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk.* 2":
              - link "playwright by testers talk.* 2":
                - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA811XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk.*+2&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
  - list:
    - listitem:
      - strong: "1"
      - link "2":
        - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA9F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk.*&b=8&pz=7&bct=0&xargs=0
      - link "3":
        - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA9V1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk.*&b=15&pz=7&bct=0&xargs=0
      - link "4":
        - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA9l1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk.*&b=22&pz=7&bct=0&xargs=0
      - link "5":
        - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA911XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk.*&b=29&pz=7&bct=0&xargs=0
      - link ". . . Next":
        - /url: https://search.yahoo.com/search;_ylt=Awr.zSc_tmxqJwIA.F1XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=Playwright+by+Testers+Talk.*&b=8&pz=7&bct=0&xargs=0
    - listitem
- contentinfo:
  - list:
    - listitem:
      - link "Help":
        - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awr.zSc_tmxqJwIA.V1XNyoA
    - listitem:
      - link "Suggestions":
        - /url: https://yahoo.uservoice.com/forums/193847-search
    - listitem:
      - link "Terms":
        - /url: https://guce.yahoo.com/terms?locale=en-US
    - listitem:
      - link "Privacy":
        - /url: https://guce.yahoo.com/privacy-policy?locale=en-US
    - listitem:
      - link "Privacy Dashboard":
        - /url: https://guce.yahoo.com/privacy-dashboard?locale=en-US&done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3DPlaywright%2Bby%2BTesters%2BTalk.*
    - listitem:
      - link "Advertise":
        - /url: https://advertising.yahoo.com/article/search-advertising.html
    - listitem:
      - link "About ads":
        - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awr.zSc_tmxqJwIA_11XNyoA
    - listitem:
      - link "About this page":
        - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awr.zSc_tmxqJwIAAF5XNyoA?impressions=true
    - listitem: Powered by Bing™
```

# Test source

```ts
  1  | import { Page, expect, Locator } from "@playwright/test";
  2  | 
  3  | export class PlaylistPage {
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
  17 |     async validatePageTitle(pageTitle:string){
> 18 |         await expect(this.page).toHaveTitle(pageTitle);
     |                                 ^ Error: expect(page).toHaveTitle(expected) failed
  19 |     }
  20 | 
  21 | }
```