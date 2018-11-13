// ==UserScript==
// @name         CurseForge汉化文本修正
// @namespace    https://www.yesterday17.cn/
// @version      1.0
// @description  修改CurseForge的汉化文本
// @author       Yesterday17
// @include      *://minecraft.curseforge.com/*
// @run-at       document-start
// ==/UserScript==

"use strict";

(function() {
  const translation = {
    Elerium: {
      ControlPanel: {
        AreYouSureYouWantToDeleteName: "Are you sure you want to delete {0}?"
      },
      Developer: {
        AreYouSureRemoveRole:
          "Are you sure you would like to delete {0} from the company?"
      },
      Extension: {
        DeveloperWritableChannelSegmentVersion:
          "Developer Writable Channel Segment Version",
        DeveloperWritableChannelSegmentVersionDesc:
          "If present - the extension will be inactive unless the version string in the channel\u0027s developer segment matches this value",
        MobileConfirmDisableHeader:
          "Are you sure you want to disable mobile support?",
        MobileConfirmDisableMessage:
          "When this version is released users will no longer be able access your extension from mobile.",
        RequestIdentityLinkRequired: "Add Tooltip Copy",
        RequestIdentityLinkRequiredWithPurchases:
          "Request Identity Link required with In-Extension Purchases",
        RequiredPerChannelConfigurations: "Required Per Channel Configuration",
        RequiredPerChannelConfigurationsDesc:
          'If present - this must match the per channel configuration string, for activation to proceed. See the \u003ca href="https://dev.twitch.tv/docs/extensions/reference/#set-extension-required-configuration" target="_blank"\u003eSet Extension Required Configuration\u003c/a\u003e Endpoint.'
      },
      Global: { Favorite: "Favorite", Unfavorite: "Unfavorite" }
    },
    Global: {
      Buttons: {
        Cancel: "取消",
        Create: "创建",
        Delete: "删除",
        Edit: "编辑",
        Push: "Push",
        Update: "更新"
      },
      Calendar: { Month: "本月", Today: "今天", Week: "周" },
      Common: {
        Add: "添加",
        AddCharacter: "添加一个字符",
        AdvancedSearch: "高级搜索",
        Apply: "应用",
        Ascending: "递增",
        ClickHere: "点击这里",
        ColonConnector: "：",
        Comments: "评论",
        Confirm: "确认",
        ConfirmDelete: "您确定要删除{0}吗？",
        Descending: "降序",
        Description: "描述",
        EditMyAccount: "编辑我的帐户",
        EmailErrorMessage: "必须是一个电子邮件地址。",
        EqualErrorMessage: "{0}必须等于{1}",
        ErrorOccured: "抱歉，处理请求时发生错误。",
        FileContainsVirus: "File is contaminated with a virus.",
        IntegerValueErrorMessageMaximum: "必须在大多数被{0}。",
        IntegerValueErrorMessageMinimum: "必须至少{0}。",
        LengthErrorMessageMaximum:
          "Must be at most {0} PLURAL[{0};character;characters] long.",
        LengthErrorMessageMinimum:
          "Must be at least {0} PLURAL[{0};character;characters] long.",
        Logout: "注销",
        Milliseconds: "{0} PLURAL[{0};millisecond;milliseconds]",
        More: "更多",
        MyCharacters: "我的人物",
        Name: "名字",
        New: "New",
        Normal: "正常",
        NumberOfPrivateMessagesAbbr: "{0} PLURAL[{0};PM;PMs]",
        PageOf: "页面{0}的{1}",
        PageXOfY: "页{0}的{1}",
        PleaseLogIn: "请登录",
        PleaseWaitProcessing: "请稍候，正在处理中……",
        PrivateMessagesAbbr: "PMs",
        QuoteFrom: "引用{0}",
        Remove: "删除",
        RequiredErrorMessage: "此字段是必需的。",
        RestoreContent: "还原内容",
        SelectCharacter: "选择一个字符",
        SimpleSearch: "简单搜索",
        Submit: "提交",
        TestStuff: "This is just a test. {0} PLURAL[{0};bird;birds].",
        Title: "标题",
        UserAsCharacter: "{0}作为",
        UserAvatar: "{0}的头像",
        Username: "用户名",
        WelcomeUser: "欢迎您，{0}！"
      },
      ContentManagement: {
        AddMediaGallery: "添加媒体库",
        ExistingFolders: "现有的文件夹",
        HideAddGallery: "不要添加媒体库",
        Insert: "插入",
        InsertAnImage: "插入图片",
        OnSelectedTemplate: "适用于选择（{0}）",
        PageFormDoNotSetDate: "不设定日期",
        PageFormSetDate: "设定日期",
        PublishOnTemplate: "发布{0}",
        SelectImage: "选择一个图像"
      },
      Contests: {
        ContestPrizeItemAwardSubject: "You Have Been Awarded {0}",
        ContestPrizeItemHtmlBody:
          'You have been awarded {1}.\r\n\r\n\u003ca href="{2}" target=_blank\u003e{0}\u003c/a\u003e',
        ContestPrizeItemTextBody:
          "You have been awarded {0}.\r\n\r\nVisit {1} to claim your prize.",
        YouAreDisqualified: "You have been disqualified!"
      },
      ControlPanel: {
        AddNewHeader: "添加新标题",
        AddSubNavigationLink:
          '\u003cdiv class="header"\u003e新增小组导航\u003c/div\u003e添加一个小组导航链接',
        BulkConfirm: "你确定要{0}这些项目？",
        CompLegacySubscription: "Issue Comp",
        "Contactology Campaigns": "Contactology Campaigns",
        EntitySubscriptionTypes: "Entity Subscription Types",
        LegacySubscriptions: "Legacy Subscriptions",
        LegacySubscriptionSearch: "Search Legacy Subscriptions",
        MenuLegacySubscriptions: "Legacy Subscriptions",
        MinimumPostCount: "最低员额数",
        MovePrivateMessagesPrompt:
          'Are you sure you want to move these private message(s) into the "{0}" folder?',
        PushNotification: "Push Notification",
        RemoveLinkTooltip:
          '\u003cdiv class="header"\u003e删除链接\u003c/div\u003e删除这从你的网站导航链接。',
        SubscriptionID: "Subscription ID",
        SubscriptionTypeEdit: "Subscription Type Edit",
        SubscriptionTypePush: "Push Subscription Type Notification",
        SubscriptionTypes: "Subscription Types",
        SimpleSearch: "Simple Search"
      },
      Dates: {
        AprilAbbr: "4月",
        AugustAbbr: "8月",
        Days: "{0}天",
        DecemberAbbr: "12月",
        FebruaryAbbr: "2月",
        FridayAbbr: "周五",
        FutureFormat: "{0} from now",
        Hours: "{0}小时",
        JanuaryAbbr: "1月",
        JulyAbbr: "7月",
        JuneAbbr: "6月",
        LessThanOneMinute: "不到一分钟",
        MarchAbbr: "3月",
        MayAbbr: "5月",
        Minutes: "{0}分钟",
        MondayAbbr: "周一",
        NovemberAbbr: "11月",
        OctoberAbbr: "10月",
        OneMinute: "1分钟",
        PastFormat: "{0}前",
        SaturdayAbbr: "周六",
        Seconds: "{0}秒",
        SeptemberAbbr: "9月",
        StandardDateFormat: "{2}年{1}{0}日",
        StandardDateTimeFormat: "{1}，{0} {4} {6} {2}:{3}:{5}",
        SundayAbbr: "周日",
        ThursdayAbbr: "周四",
        TuesdayAbbr: "周二",
        WednesdayAbbr: "周三"
      },
      ErrorMessages: {
        NumericPrecisionDecimalDigitCountErrorMessageTemplate:
          "您提供的价值已{0}十进制数字和小数点位数限制{1}位。",
        TagEmpty: "您不能添加一个空的标签。"
      },
      Files: {
        AddAttachment: "添加此附件回来。",
        ChangeDescription: "更改此附件的说明",
        DeleteAttachment: "删除此附件",
        FileTooLarge: "该文件提供的是太大。请提供文件小于{0}。"
      },
      Forums: {
        Add: "添加",
        CreateForum: "创建论坛",
        Delete: "删除",
        EditForum: "编辑论坛",
        GoToFirstUnreadPost: "进入后先读",
        JumpToPage: "跳到页",
        LockThread: "锁定主题",
        Moderator: "主持人",
        Move: "移动",
        OnSelected: "在选择（{0}）",
        RestoreContentDescription:
          "点击恢复您上次输入的文本，对有错误的情况下你的最后一次尝试",
        SearchForums: "搜索论坛",
        SelectAll: "选择所有",
        SendMessage: "发送邮件",
        Unread: "未读",
        ViewPosts: "查看文章",
        ViewProfile: "查看用户信息"
      },
      Languages: {
        Arabic: "Arabic",
        "Brazillian Portugese": "Brazillian Portugese",
        BritishEnglish: "英语（英国）",
        English: "英语",
        French: "法语",
        German: "德语",
        Greek: "希腊语",
        Indonesian: "印度尼西亚语",
        Italian: "意大利语",
        Japanese: "日语",
        Korean: "汉语",
        LatinAmericanSpanish: "拉丁美洲西班牙语",
        Polish: "波兰语",
        Russian: "俄语",
        SimplifiedChinese: "简体中文",
        Spanish: "西班牙语",
        Swedish: "瑞典语",
        TraditionalChinese: "繁体中文",
        Uzbec: "Uzbec",
        Vietnamese: "Vietnamese"
      },
      MailTemplates: {
        ReportBody:
          'Hello {0},\r\n\r\n\u003cp\u003e{6} has reported this \u003ca href="{4}"\u003econtent\u003c/a\u003e on \u003ca href="{7}"\u003e{8}\u003c/a\u003e for the reason {2}.\u003c/p\u003e\r\n\u003cp\u003e{9}\u003c/p\u003e\r\n\u003cp\u003eYou can view the report by \u003ca href="{7}"\u003evisiting the report page\u003c/a\u003e.\u003c/p\u003e\r\n\r\n\u003cp\u003eReported content:\r\n\u003cblockquote\u003e\r\nPosted by \u003ca href="{5}"\u003e{10}\u003c/a\u003e\r\n\u003cp\u003e\r\n{3}\r\n\u003c/p\u003e\r\n\u003c/blockquote\u003e\u003c/p\u003e\r\n\r\n__\r\n\u003cp style="font-size:11px"\u003eTo unsubscribe from these email notifications, go to \u003ca href="{1}"\u003eyour notifications page.\u003c/a\u003e\u003c/p\u003e'
      },
      Polls: {
        AddChoice: "添加选择",
        AddPoll: "添加一项民意调查",
        ChoiceNumberTemplate: "选择＃{0}",
        HideResults: "隐藏结果",
        RemoveChoice: "删除选择",
        RemovePoll: "不要添加的民意调查",
        ViewResults: "查看结果"
      },
      Ratings: {
        YouRatedThis:
          "You rated this {0} PLURAL[{0};star;stars]. {2} PLURAL[{2};user;users] rated it for a total average of {1} PLURAL[{1};star;stars]."
      },
      Reporting: { Report: "报告" },
      TinyMCE: { XenonMediaPluginDesc: "从文件夹中添加文件" },
      Translator: {
        ReportATranslation: "Report a Translation",
        ReportTranslationInstructions:
          "To report a translation, click on text that has a dotted underline."
      },
      Upsells: {
        SubscriptionRequiresLogin: "You must be logged in to Subscribe."
      },
      UserRegistration: {
        ConfirmPassword: "确认密码",
        Password: "密码",
        RecoverAccountStep2Info2:
          "输入一个新的帐户密码，然后点击\u0027更改密码\u0027按钮。",
        Username: "用户名",
        UsernameIsTaken: "该用户名已被注册。"
      },
      Widgets: {
        LatestPosts: "最新的帖子",
        LatestNews: "最新新闻",
        Poll: "民意调查",
        WhosOnline: "谁在线",
        RandomPicture: "随机图片",
        Calendar: "日历",
        Recruitment: "招聘"
      }
    }
  };

  /**
   * Add localization script
   */
  const script = document.createElement("script");
  script.innerHTML = `Elerium.Localization.populate(7, ${JSON.stringify(
    translation
  )});`;

  /**
   * 匹配规则
   */
  const category = /^(?!\/project)(?!\/forums)(?!\/dashboard)(?:\/[a-zA-Z0-9\-]+)+$/;
  const project = /^\/projects\/[a-zA-Z0-9\-]+$/;
  const files = /^\/projects\/[a-zA-Z0-9\-]+\/files$/;
  const dependencies = /^\/projects\/[a-zA-Z0-9\-]+\/relations\/dependencies$/;
  const dependents = /^\/projects\/[a-zA-Z0-9\-]+\/relations\/dependents$/;

  const dictionary = {
    projects: '项目',
    forum: '论坛',
    'reward-store': 'Reward Store',
    dashboard: 'Dashboard',
    feedback: '反馈',

    modpack: "整合包",
    customization: "Customization",
    addons: "Addons",
    mods: "模组",
    'texture-packs': "材质包",
    worlds: "世界"
  };

  document.addEventListener("DOMContentLoaded", function(event) {
    const path = new URL(document.URL).pathname;

    // 加载修改过的汉化
    document.head.appendChild(script);

    // 修改全局共通的文本
    document.querySelector("#nav-projects a span").innerText = dictionary.projects;
    document.querySelector("#nav-forums a span").innerText = dictionary.forum;
    document.querySelector("#nav-reward-store a span").innerText =
      dictionary['reward-store'];
    document.querySelector("#nav-dashboard a span").innerText = dictionary.dashboard;
    document.querySelector("#nav-feedback a span").innerText = dictionary.feedback;

    document.querySelectorAll("#nav-projects li a span")[0].innerText =
      dictionary.modpack;
    document.querySelectorAll("#nav-projects li a span")[1].innerText =
      dictionary.customization;
    document.querySelectorAll("#nav-projects li a span")[2].innerText =
      dictionary.addons;
    document.querySelectorAll("#nav-projects li a span")[3].innerText =
      dictionary.mods;
    document.querySelectorAll("#nav-projects li a span")[4].innerText =
      dictionary['texture-packs'];
    document.querySelectorAll("#nav-projects li a span")[5].innerText =
      dictionary.worlds;

    if (path == "/") {
    } else if (path == "/projects") {
      // 按钮：启动项目 -> 新建项目
      for (const node of document.querySelectorAll(
        ".project-category .button span"
      )) {
        node.innerText = "新建项目";
      }
    } else if (path.match(category)) {
      console.log("category");
    } else if (path.match(project)) {
      console.log("project");
    } else if (path.match(files)) {
      console.log("files");
    } else if (path.match(dependencies)) {
      console.log("dependencies");
    } else if (path.match(dependents)) {
      console.log("dependents");
    }
  });
})();
