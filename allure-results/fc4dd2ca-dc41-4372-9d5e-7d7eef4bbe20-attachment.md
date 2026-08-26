# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter04/04_TestReports_Test.spec.ts >> RegressionTesting >> Test Reports in Playwright4
- Location: tests/Chapter04/04_TestReports_Test.spec.ts:36:13

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /playwright typescript by testers talk/
Received string:  "playwright by testers talk - Yahoo Search Results"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "playwright by testers talk - Yahoo Search Results"

```

```yaml
- link "Yahoo":
  - /url: https://www.yahoo.com
- button "Settings"
- link "Sign In":
  - /url: https://login.yahoo.com/;_ylt=Awr9.bti21dqJQIAjT5XNyoA?.intl=us&.lang=en-US&pspid=2766679&.src=search&.done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3Dplaywright%2Bby%2Btesters%2Btalk&activity=header-signin
- search:
  - combobox "Search the web": playwright by testers talk
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
          - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAjj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=playwright+by+testers+talk&fr2=piv-web&fr=sfp
      - listitem:
        - link "Images":
          - /url: https://images.search.yahoo.com/search/images;_ylt=Awr9.bti21dqJQIAjz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=playwright+by+testers+talk&fr2=piv-web&fr=sfp
      - listitem:
        - link "News":
          - /url: https://news.search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAkD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=playwright+by+testers+talk&fr2=piv-web&fr=sfp
    - link "More":
      - /url: "#"
  - listitem:
    - button "Anytime"
- document:
  - heading "Search Results" [level=2]
  - list:
    - listitem:
      - heading "Videos" [level=3]:
        - link "Videos":
          - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAmz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=playwright+by+testers+talk&fr=sfp
      - region "carousel":
        - group "Item 1 of 3":
          - 'link "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial 8:55:09 YouTube #1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial Jan 8, 2025 189.5K Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAmD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=playwright+by+testers+talk&fr=sfp&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOVP.nJuGdKjC2K4lVepgZBDC3gHgFo%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D788GvvcfwTY&tit=%231+Playwright+Automation+Using+TypeScript+Full+Course+2026+%7C+Playwright+TypeScript+Beginner+Tutorial&pos=01&vid=c1726d1a96727d9f5219c32f37125ff9&sigr=BTQ9uzsNhWXA&sigt=uFacVW5e8YXB&sigi=eoWxyAqy7jSk
            - img "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
            - text: 8:55:09
            - paragraph: YouTube
            - paragraph: "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial"
            - paragraph: Jan 8, 2025
            - paragraph: 189.5K Views
        - group "Item 2 of 3":
          - 'link "Playwright TypeScript #70 Run Playwright Test on Multiple Environments QA, DEV, STAGING, PROD etc 19:35 YouTube Playwright TypeScript #70 Run Playwright Test on Multiple Environments QA, DEV, STAGING, PROD etc Oct 10, 2025 1.3K Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAmT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=playwright+by+testers+talk&fr=sfp&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOVP.EWl2XoDsLCZM0VVEHYRgiwEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw3pR73rsKBU&tit=Playwright+TypeScript+%2370+Run+Playwright+Test+on+Multiple+Environments+QA%2C+DEV%2C+STAGING%2C+PROD+etc&pos=11&vid=65fdc63c091677bf0a03f13fc8e576b2&sigr=QG0pSUk5QgLN&sigt=J3e9qZvDjZGj&sigi=0afOE0.OXrT2
            - 'img "Playwright TypeScript #70 Run Playwright Test on Multiple Environments QA, DEV, STAGING, PROD etc"'
            - text: 19:35
            - paragraph: YouTube
            - paragraph: "Playwright TypeScript #70 Run Playwright Test on Multiple Environments QA, DEV, STAGING, PROD etc"
            - paragraph: Oct 10, 2025
            - paragraph: 1.3K Views
        - group "Item 3 of 3":
          - 'link "#99 How to Run Playwright Tests using Azure DevOps Pipeline | Playwright with Azure DevOps 7:43 YouTube #99 How to Run Playwright Tests using Azure DevOps Pipeline | Playwright with Azure DevOps Dec 7, 2025 1.3K Views"':
            - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAmj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=playwright+by+testers+talk&fr=sfp&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOVP.Quh5pCCCtni9fepvkUKNyQEsDh%3Fpid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhfcR3Kxr-lU&tit=%2399+How+to+Run+Playwright+Tests+using+Azure+DevOps+Pipeline+%7C+Playwright+with+Azure+DevOps&pos=21&vid=a4f2fd33669b8f4e6a5c8be4d76520b2&sigr=2iLRCniP5Ehb&sigt=tA2ozAdT6l8M&sigi=qsqBrUF.mQxm
            - img "#99 How to Run Playwright Tests using Azure DevOps Pipeline | Playwright with Azure DevOps"
            - text: 7:43
            - paragraph: YouTube
            - paragraph: "#99 How to Run Playwright Tests using Azure DevOps Pipeline | Playwright with Azure DevOps"
            - paragraph: Dec 7, 2025
            - paragraph: 1.3K Views
      - link "View all":
        - /url: https://video.search.yahoo.com/search/video;_ylt=Awr9.bti21dqJQIAnD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=playwright+by+testers+talk&fr=sfp
    - listitem:
      - link "YouTube https://www.youtube.com › playlist Playwright by Testers Talk - YouTube":
        - /url: https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM
        - text: YouTube https://www.youtube.com › playlist
        - heading "Playwright by Testers Talk - YouTube" [level=3]
      - paragraph: "Playwright #2 What is Playwright? Advantages & Limitations. Playwright by Testers Talk Playwright tutorial playwright automation playwright automation tutorial playwright vs cypress..."
      - text: People also search for
      - link
      - link "playwright by testers talk script":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20script
      - link "playwright by testers talk show":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20show
      - link "playwright by testers talk about data":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20about%20data
      - link "playwright by testers talk download":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20download
      - link "playwright by testers talk about different":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20about%20different
      - link "playwright by testers talk ai":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20ai
      - link "playwright by testers talk about time":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20about%20time
      - link "playwright by testers talk app":
        - /url: https://search.yahoo.com/search?fr=sfp&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-algo%2Cct%3Agossip&p=playwright%20by%20testers%20talk%20app
    - listitem:
      - heading "Searches related to playwright by testers talk" [level=2]
      - table:
        - rowgroup:
          - row "playwright by testers talk script playwright by testers talk ai":
            - cell "playwright by testers talk script":
              - link "playwright by testers talk script":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAnj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk ai":
              - link "playwright by testers talk ai":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAoj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk show playwright by testers talk download":
            - cell "playwright by testers talk show":
              - link "playwright by testers talk show":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAnz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk download":
              - link "playwright by testers talk download":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAoz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk about different playwright by testers talk about time":
            - cell "playwright by testers talk about different":
              - link "playwright by testers talk about different":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAoD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk about time":
              - link "playwright by testers talk about time":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIApD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk about data playwright by testers talk app":
            - cell "playwright by testers talk about data":
              - link "playwright by testers talk about data":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAoT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk app":
              - link "playwright by testers talk app":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIApT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1taWQ-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-mid%2Cct%3Agossip&fr=sfp
    - listitem:
      - link "YouTube https://www.youtube.com › @testerstalk Testers Talk - YouTube":
        - /url: https://www.youtube.com/@testerstalk
        - text: YouTube https://www.youtube.com › @testerstalk
        - heading "Testers Talk - YouTube" [level=3]
      - paragraph: Playwright is an open-source automation library for browser testing.
    - listitem:
      - link "bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site Playwright_TypeScript_FullCourse_By_TestersTalk":
        - /url: https://bakkappan.github.io/Testers-Talk-Practice-Site/Playwright_TypeScript_FullCourse_By_TestersTalk.pdf
        - text: bakkappan.github.io https://bakkappan.github.io › Testers-Talk-Practice-Site
        - heading "Playwright_TypeScript_FullCourse_By_TestersTalk" [level=3]
      - paragraph: Playwright's expect is powerful and provides a rich set of matchers for various types of checks, such as checking element visibility, text content, existence etc.
    - listitem:
      - link "Medium https://medium.com › @testerstalk Testers Talk – Medium":
        - /url: https://medium.com/@testerstalk
        - text: Medium https://medium.com › @testerstalk
        - heading "Testers Talk – Medium" [level=3]
      - paragraph: Jun 11, 2025 · Explore how to harness the power of Playwright to automate and validate Dynamics 365 CRM API workflows. This article offers a hands-on… Testers Talk · May 28, 2025
    - listitem:
      - link "Scribd https://www.scribd.com › document › 861225550 Playwright TypeScript Full Course Guide | PDF | Selenium ...":
        - /url: https://www.scribd.com/document/861225550/Playwright-TypeScript-Full-Course-by-Testers-Talk
        - text: Scribd https://www.scribd.com › document › 861225550
        - heading "Playwright TypeScript Full Course Guide | PDF | Selenium ..." [level=3]
      - paragraph: Playwright TypeScript Full Course by Testers Talk - Free download as PDF File (.pdf), Text File (.txt) or read online for free. The document outlines a comprehensive course on using Playwright with TypeScript, covering installation, setup, and various testing techniques.
    - listitem:
      - link "Medium https://medium.com › @testerstalk › api-mocking-using API Mocking using Playwright. What is API Mocking? | by ...":
        - /url: https://medium.com/@testerstalk/api-mocking-using-playwright-0cffefbd327c
        - text: Medium https://medium.com › @testerstalk › api-mocking-using
        - heading "API Mocking using Playwright. What is API Mocking? | by ..." [level=3]
      - paragraph: Sep 23, 2024 · Playwright provides APIs to mock and modify network traffic, both HTTP and HTTPS. -> Any requests that a page does, including XHRs and fetch requests, can be tracked, modified and mocked. > With...
    - listitem:
      - link "Github https://github.com › BakkappaN BakkappaN (Testers Talk) · GitHub":
        - /url: https://github.com/BakkappaN/
        - text: Github https://github.com › BakkappaN
        - heading "BakkappaN (Testers Talk) · GitHub" [level=3]
      - paragraph: In this Playwright with TypeScript Tutorial Full Course covered topics from basics to advance level. Playwright with TypeScript Full Course - https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKm…
  - list:
    - listitem:
      - heading "Searches related to playwright by testers talk" [level=2]
      - table:
        - rowgroup:
          - row "playwright by testers talk script playwright by testers talk about different":
            - cell "playwright by testers talk script":
              - link "playwright by testers talk script":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIArD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+script&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk about different":
              - link "playwright by testers talk about different":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAsD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzUEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+different&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk show playwright by testers talk ai":
            - cell "playwright by testers talk show":
              - link "playwright by testers talk show":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIArT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+show&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk ai":
              - link "playwright by testers talk ai":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAsT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzYEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+ai&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk about data playwright by testers talk about time":
            - cell "playwright by testers talk about data":
              - link "playwright by testers talk about data":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIArj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzMEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+data&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk about time":
              - link "playwright by testers talk about time":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAsj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzcEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+about+time&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
          - row "playwright by testers talk download playwright by testers talk app":
            - cell "playwright by testers talk download":
              - link "playwright by testers talk download":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIArz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzQEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+download&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
            - cell "playwright by testers talk app":
              - link "playwright by testers talk app":
                - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAsz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzgEdnRpZAMEc2VjA3JlbC1ib3Q-?p=playwright+by+testers+talk+app&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-bottom%2Cct%3Agossip&fr=sfp
  - list:
    - listitem:
      - strong: "1"
      - link "2":
        - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAtD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=playwright+by+testers+talk&b=8&pz=7&bct=0&xargs=0
      - link "3":
        - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAtT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=playwright+by+testers+talk&b=15&pz=7&bct=0&xargs=0
      - link "4":
        - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAtj5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=playwright+by+testers+talk&b=22&pz=7&bct=0&xargs=0
      - link "5":
        - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAtz5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=playwright+by+testers+talk&b=29&pz=7&bct=0&xargs=0
      - link ". . . Next":
        - /url: https://search.yahoo.com/search;_ylt=Awr9.bti21dqJQIAuD5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BhZ2luYXRpb24-?fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&p=playwright+by+testers+talk&b=8&pz=7&bct=0&xargs=0
    - listitem
- contentinfo:
  - list:
    - listitem:
      - link "Help":
        - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awr9.bti21dqJQIAuT5XNyoA
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
        - /url: https://guce.yahoo.com/privacy-dashboard?locale=en-US&done=https%3A%2F%2Fsearch.yahoo.com%2Fsearch%3Ffr%3Dsfp%26p%3Dplaywright%2Bby%2Btesters%2Btalk
    - listitem:
      - link "Advertise":
        - /url: https://advertising.yahoo.com/article/search-advertising.html
    - listitem:
      - link "About ads":
        - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awr9.bti21dqJQIAvz5XNyoA
    - listitem:
      - link "About this page":
        - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awr9.bti21dqJQIAwD5XNyoA?impressions=true
    - listitem: Powered by Bing™
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SmokeTesting', async () => {
  4  |     test('Test Reports in Playwright1', async ({ page }) => {
  5  |         //Navigage to URL
  6  |         await page.goto('https://search.yahoo.com/');
  7  |         await page.getByRole('combobox', { name: 'Search query' }).click();
  8  |         await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
  9  |         await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
  10 |         await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
  11 |         await expect(page).toHaveTitle(/playwright by testers talk/)
  12 |     })
  13 | })
  14 | 
  15 | test.describe('RegressionTesting', async () => {
  16 |     test('Test Reports in Playwright2', async ({ page }) => {
  17 |         //Navigage to URL
  18 |         await page.goto('https://search.yahoo.com/');
  19 |         await page.getByRole('combobox', { name: 'Search query' }).click();
  20 |         await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
  21 |         await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
  22 |         await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
  23 |         await expect(page).toHaveTitle(/playwright by testers talk/)
  24 |     })
  25 | 
  26 |     test('Test Reports in Playwright3', async ({ page }) => {
  27 |         //Navigage to URL
  28 |         await page.goto('https://search.yahoo.com/');
  29 |         await page.getByRole('combobox', { name: 'Search query' }).click();
  30 |         await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
  31 |         await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
  32 |         await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
  33 |         await expect(page).toHaveTitle(/playwright by testers talk/)
  34 |     })
  35 | 
  36 |         test('Test Reports in Playwright4', async ({ page }) => {
  37 |         //Navigage to URL
  38 |         await page.goto('https://search.yahoo.com/');
  39 |         await page.getByRole('combobox', { name: 'Search query' }).click();
  40 |         await page.getByRole('combobox', { name: 'Search query' }).fill('playwright by testers talk');
  41 |         await page.getByRole('combobox', { name: 'Search query' }).press('Enter')
  42 |         await page.locator("//h3[@style='display:block']/span[starts-with(text(), 'Playwright by')]").click();
> 43 |         await expect(page).toHaveTitle(/playwright typescript by testers talk/)
     |                            ^ Error: expect(page).toHaveTitle(expected) failed
  44 |     })
  45 | })
  46 | 
  47 | 
  48 | 
```