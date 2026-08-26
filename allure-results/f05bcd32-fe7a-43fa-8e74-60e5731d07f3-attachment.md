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
  - waiting for getByRole('link', { name: 'Playwright by Testers Talk - YouTube' }).first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - link "Yahoo.com" [ref=e4] [cursor=pointer]:
      - /url: https://r.search.yahoo.com/_ylt=Awr98eN0qGxqWqMS5gxDDWVH/RV=2/RE=1785534708/RO=10/RU=https%3a%2f%2fwww.yahoo.com%2f/RK=2/RS=7j6OppTPUXJm9gNtulDKLFrNDVs-
    - button "Settings" [ref=e6] [cursor=pointer]
    - link "Sign In" [ref=e8] [cursor=pointer]:
      - /url: https://login.yahoo.com/;_ylt=Awr98eN0qGxqWqMS5wxDDWVH?.src=search&.intl=us&.lang=en-US&.done=https%3A%2F%2Fsearch.yahoo.com%2F%3F&pspid=1197804867&activity=header-signin
      - generic [ref=e9]: Sign In
    - generic [ref=e10]:
      - search [ref=e15]:
        - generic: Search query
        - combobox "Search query" [expanded] [ref=e17]
        - generic [ref=e18]:
          - button "Search by voice" [ref=e20] [cursor=pointer]
          - button "Search" [active] [ref=e21] [cursor=pointer]:
            - img "Magnifying glass icon" [ref=e22]
      - list [ref=e28]:
        - listitem [ref=e29]:
          - generic [ref=e30]:
            - heading "Today’s trending searches" [level=3] [ref=e33]
            - list [ref=e35]:
              - listitem [ref=e36]:
                - link "Boston Red Sox Performance Boston Red Sox Performance Red Sox defeat Athletics in series finale" [ref=e37] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS8wxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Boston+Red+Sox+Performance&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Boston Red Sox Performance" [ref=e40]
                  - generic [ref=e41]:
                    - heading "Boston Red Sox Performance" [level=4] [ref=e42]:
                      - generic "Red Sox defeat Athletics in series finale" [ref=e43]: Boston Red Sox Performance
                    - paragraph [ref=e44]: Red Sox defeat Athletics in series finale
              - listitem [ref=e45]:
                - link "Sophie Cunningham Controversy Sophie Cunningham Controversy Sophie Cunningham addresses WNBA controversies" [ref=e46] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS9AxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Sophie+Cunningham+Controversy&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Sophie Cunningham Controversy" [ref=e49]
                  - generic [ref=e50]:
                    - heading "Sophie Cunningham Controversy" [level=4] [ref=e51]:
                      - generic "Sophie Cunningham addresses WNBA controversies" [ref=e52]: Sophie Cunningham Controversy
                    - paragraph [ref=e53]: Sophie Cunningham addresses WNBA controversies
              - listitem [ref=e54]:
                - link "Iran Conflict Iran Conflict Iran strikes US targets in Kuwait." [ref=e55] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS9QxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Iran+Conflict&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Iran Conflict" [ref=e58]
                  - generic [ref=e59]:
                    - heading "Iran Conflict" [level=4] [ref=e60]:
                      - generic "Iran strikes US targets in Kuwait." [ref=e61]: Iran Conflict
                    - paragraph [ref=e62]: Iran strikes US targets in Kuwait.
              - listitem [ref=e63]:
                - link "Donald Trump Donald Trump Trump faces media attention on health and legal issues" [ref=e64] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS9gxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Donald+Trump&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Donald Trump" [ref=e67]
                  - generic [ref=e68]:
                    - heading "Donald Trump" [level=4] [ref=e69]:
                      - generic "Trump faces media attention on health and legal issues" [ref=e70]: Donald Trump
                    - paragraph [ref=e71]: Trump faces media attention on health and legal issues
              - listitem [ref=e72]:
                - link "Fauci Senate Hearing Fauci Senate Hearing Fauci invokes fifth in Senate hearing" [ref=e73] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS9wxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Fauci+Senate+Hearing&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Fauci Senate Hearing" [ref=e76]
                  - generic [ref=e77]:
                    - heading "Fauci Senate Hearing" [level=4] [ref=e78]:
                      - generic "Fauci invokes fifth in Senate hearing" [ref=e79]: Fauci Senate Hearing
                    - paragraph [ref=e80]: Fauci invokes fifth in Senate hearing
              - listitem [ref=e81]:
                - link "Ceuta Migrant Influx Ceuta Migrant Influx 60,000 migrants crossed into Ceuta, with 34 deaths reported." [ref=e82] [cursor=pointer]:
                  - /url: https://search.yahoo.com/search;_ylt=Awr98eN0qGxqWqMS.AxDDWVH;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?ei=UTF-8&p=Ceuta+Migrant+Influx&fr=sfp-tts&fr2=p%3As%2Cv%3Asfp%2Cm%3Atn%2Cct%3Aall%2Cpg%3A1%2Cstl%3Atxt%2Ckt%3Aorg%2Cb%3A
                  - img "Ceuta Migrant Influx" [ref=e85]
                  - generic [ref=e86]:
                    - heading "Ceuta Migrant Influx" [level=4] [ref=e87]:
                      - generic "60,000 migrants crossed into Ceuta, with 34 deaths reported." [ref=e88]: Ceuta Migrant Influx
                    - paragraph [ref=e89]: 60,000 migrants crossed into Ceuta, with 34 deaths reported.
            - link "Summaries may be generated by AI" [ref=e92]:
              - link [ref=e93]
              - text: Summaries may be generated by AI
    - list [ref=e95]:
      - listitem [ref=e96]:
        - link "Help" [ref=e97] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop;_ylt=Awr98eN0qGxqWqMS.QxDDWVH
      - listitem [ref=e98]:
        - link "Privacy" [ref=e99] [cursor=pointer]:
          - /url: https://r.search.yahoo.com/_ylt=Awr98eN0qGxqWqMS.gxDDWVH/RV=2/RE=1785534708/RO=10/RU=https%3a%2f%2fguce.yahoo.com%2fprivacy-policy%3flocale%3den-US/RK=2/RS=OVkIriVx7WsT0vWOsRBCFtUatAo-
      - listitem [ref=e100]:
        - link "Terms" [ref=e101] [cursor=pointer]:
          - /url: https://r.search.yahoo.com/_ylt=Awr98eN0qGxqWqMS.wxDDWVH/RV=2/RE=1785534708/RO=10/RU=https%3a%2f%2fguce.yahoo.com%2fterms%3flocale%3den-US/RK=2/RS=uuWqs8Wl01P8QnB5tXHJMA0.whA-
      - listitem [ref=e102]:
        - link "Privacy Dashboard" [ref=e103] [cursor=pointer]:
          - /url: https://r.search.yahoo.com/_ylt=Awr98eN0qGxqWqMS_AxDDWVH/RV=2/RE=1785534708/RO=10/RU=https%3a%2f%2fguce.yahoo.com%2fprivacy-dashboard%3flocale%3den-US%26done%3dhttps%253A%252F%252Fsearch.yahoo.com%252F%253Fei%253DUTF-8/RK=2/RS=hf0G6ViE8eGzJCbZ4K8lE2oKJGU-
      - listitem [ref=e104]:
        - link "Advertise" [ref=e105] [cursor=pointer]:
          - /url: https://r.search.yahoo.com/_ylt=Awr98eN0qGxqWqMS_QxDDWVH/RV=2/RE=1785534708/RO=10/RU=https%3a%2f%2fadvertising.yahoo.com%2farticle%2fsearch-advertising.html/RK=2/RS=P3567zOUunTSN8s9puHhQAogTqs-
      - listitem [ref=e106]:
        - link "About ads" [ref=e107] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search/sln2244.html;_ylt=Awr98eN0qGxqWqMS_gxDDWVH
      - listitem [ref=e108]:
        - link "About this page" [ref=e109] [cursor=pointer]:
          - /url: https://help.yahoo.com/kb/search-for-desktop/SLN2206.html;_ylt=Awr98eN0qGxqWqMS_wxDDWVH?impressions=true
  - paragraph [ref=e111]: 0 new suggestions shown
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