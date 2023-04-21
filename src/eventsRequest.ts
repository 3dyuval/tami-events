export const body = JSON.stringify({
  query:
    '\n  query {\n\t\tgroupByUrlname (urlname:  "tel-aviv-makers-tami") {\n\t\t\tname\n\t\t\tid \n\t\t\tlogo {\n\t\t\t\tbaseUrl\n\t\t\t}\n\t\t\tmemberships {\n\t\t\t\tcount\n\t\t\t}\n\t\t\t\tupcomingEvents (input: {first: 10}){\n\t\t\t\t\tedges {\n\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\teventUrl\n\t\t\t\t\t\t\tdescription\n# \t\t\t\t\t\t\thost\n# \t\t\t\t\t\t\thostPhoto\n# \t\t\t\t\t\t\timages \n# \t\t\t\t\t\t\tstatus\n# \t\t\t\t\t\t\tdatetime\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t}\n  }\n  ',
  variables: {},
})

export const headers = {
  'content-type': 'application/json',
  cookie:
    'MEETUP_BROWSER_ID=id=963e1243-275b-4e68-a00c-330c5d2a6348; SIFT_SESSION_ID=01f9536e-9629-4ba5-b7e8-dcbb3f2a8e62; _rm=ca3f9819-24d3-4ca9-9035-ab8cddfdf359; _gid=GA1.2.1614206408.1682069567; memberId=233195334; MEETUP_LANGUAGE=language=en&country=US; MEETUP_CSRF=7af445f3-4dab-4a31-be48-e449e717823e; MEETUP_SESSION=e22c3d4f-43eb-4ffa-b8ef-f0042f93272b; MEETUP_MEMBER=id=233195334&status=1&timestamp=1682069648&bs=0&tz=Asia/Jerusalem&zip=meetup2&country=il&city=Tel+Aviv-Yafo&state=&lat=32.07&lon=34.77&ql=false&s=19bc1c85fc1db71bc29c6f9bd93e91b40b4dff0c&scope=ALL&rem=1; ___uLangPref=en_US; _ga=GA1.1.1693828779.1682069567; OptanonConsent=isGpcEnabled=1&datestamp=Fri+Apr+21+2023+12:39:54+GMT+0300+(Israel+Daylight+Time)&version=202211.2.0&isIABGlobal=false&hosts=&consentId=50d8bdc9-1a34-4dcf-991f-43a64e2edba9&interactionCount=1&landingPath=NotLandingPage&groups=C0002:1,C0001:1,C0004:0,C0003:1&AwaitingReconsent=false; _ga_NP82XMKW0P=GS1.1.1682069566.1.1.1682069995.37.0.0',
}
