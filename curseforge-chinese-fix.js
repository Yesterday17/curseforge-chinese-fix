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
    Global: {
      Buttons: {
        Cancel: "取消",
        Create: "创建",
        Delete: "删除",
        Edit: "编辑",
        Update: "更新"
      },
      Calendar: { Month: "本月", Today: "今天", Week: "周" },
      Common: {
        Add: "添加",
        AddCharacter: "添加一个字符",
        AdvancedSearch: "高级搜索",
        Apply: "申请",
        Ascending: "递增",
        ClickHere: "点击这里",
        ColonConnector: "：",
        Comments: "评论",
        Confirm: "确认",
        ConfirmDelete: "您确定要删除{0}？",
        Descending: "降序",
        Description: "描述",
        EditMyAccount: "编辑我的帐户",
        EmailErrorMessage: "必须是一个电子邮件地址。",
        EqualErrorMessage: "{0}必须等于{1}",
        ErrorOccured: "抱歉，处理请求时发生错误。",
        IntegerValueErrorMessageMaximum: "必须在大多数被{0}。",
        IntegerValueErrorMessageMinimum: "必须至少{0}。",
        Logout: "注销",
        More: "更多",
        MyCharacters: "我的人物",
        Name: "名字",
        Normal: "正常",
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
      ControlPanel: {
        AddNewHeader: "添加新标题",
        AddSubNavigationLink:
          '\u003cdiv class="header"\u003e新增小组导航\u003c/div\u003e添加一个小组导航链接',
        BulkConfirm: "你确定要{0}这些项目？",
        MinimumPostCount: "最低员额数",
        RemoveLinkTooltip:
          '\u003cdiv class="header"\u003e删除链接\u003c/div\u003e删除这从你的网站导航链接。'
      },
      Dates: {
        AprilAbbr: "4月",
        AugustAbbr: "8月",
        DecemberAbbr: "12",
        FebruaryAbbr: "2月",
        FridayAbbr: "周五",
        FutureFormat: "从现在{0}",
        JanuaryAbbr: "1月",
        JulyAbbr: "7月",
        JuneAbbr: "6月",
        LessThanOneMinute: "少于1分钟",
        MarchAbbr: "3月",
        MayAbbr: "5月",
        MondayAbbr: "周一",
        NovemberAbbr: "11月",
        OctoberAbbr: "10月",
        OneMinute: "1分钟",
        PastFormat: "{0}前",
        SaturdayAbbr: "周五",
        Seconds: "秒",
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
        LockThread: "线程锁",
        Moderator: "主持人",
        Move: "移动",
        OnSelected: "在选择（{0}）",
        RestoreContentDescription:
          "点击恢复您上次输入的文本，对有错误的情况下你的最后一次尝试",
        SearchForums: "搜索论坛",
        SelectAll: "选择所有",
        SendMessage: "发送邮件",
        ViewPosts: "查看文章",
        ViewProfile: "查看用户信息"
      },
      Languages: {
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
        TraditionalChinese: "繁体中文"
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
      Reporting: { Report: "报告" },
      TinyMCE: { XenonMediaPluginDesc: "从文件夹中添加文件" },
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

  document.addEventListener("DOMContentLoaded", function(event) {
    // 加载修改过的汉化
    document.head.appendChild(script);
  });
})();
