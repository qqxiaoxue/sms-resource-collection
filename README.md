window.DEFAULT_RESOURCES = [
  {
    id: 1,
    title: "SMS-Activate",
    url: "https://sms-activate.org/cn",
    type: "付费",
    region: "国外",
    status: "已验证",
    tags: ["Telegram", "GPT", "多国"],
    description: "老牌付费接码平台，适合 Telegram、GPT 等常见平台注册验证，支持多地区号码。",
    notes: "比较稳定，常用于 Telegram、OpenAI 系列注册验证。建议优先使用。"
  },
  {
    id: 2,
    title: "Receive-SMS-Free",
    url: "https://receive-sms-free.cc/",
    type: "免费",
    region: "国外",
    status: "已验证",
    tags: ["免费", "验证码", "临时号码"],
    description: "适合临时收取验证码的免费站点，常用于海外平台测试与简单验证。",
    notes: "可作为免费兜底站点，但稳定性和号码数量可能不如付费平台。"
  },
  {
    id: 3,
    title: "免费接码",
    url: "https://www.goinsms.xyz",
    type: "免费",
    region: "国内",
    status: "待验证",
    tags: ["国内", "免费", "收码"],
    description: "国内常见的免费接码站点，适合基础验证场景使用。",
    notes: "多用于国内项目的临时收码验证，建议定期更新有效性。"
  },
  {
    id: 4,
    title: "MianFeiJiema",
    url: "https://mianfeijiema.com",
    type: "免费",
    region: "国内",
    status: "已验证",
    tags: ["国内", "免费", "验证码"],
    description: "国内免费接码平台，适合小型注册验证和测试需求。",
    notes: "可作为常备站点，建议保留有多个备用入口。"
  },
  {
    id: 5,
    title: "5sim",
    url: "https://5sim.net/",
    type: "付费",
    region: "国外",
    status: "已验证",
    tags: ["付费", "多国", "国外"],
    description: "提供付费和免费模式，适合多国号码需求。",
    notes: "部分功能需要科学上网，且可用号码受地区和库存影响较大。"
  },
  {
    id: 6,
    title: "国内外短信接码平台资源合集",
    url: "#",
    type: "帖子",
    region: "综合",
    status: "已验证",
    tags: ["整理帖", "合集"],
    description: "一篇典型的综合整理贴，适合作为资源入口和后续扩展索引页。",
    notes: "适合作为总入口，后续新增站点可以继续挂载进去。"
  },
  {
    id: 7,
    title: "Windows / Android 收码工具",
    url: "#",
    type: "工具",
    region: "综合",
    status: "待验证",
    tags: ["工具", "收码", "软件"],
    description: "桌面端和移动端收码工具，可以快速复制号码、读取验证码。",
    notes: "工具类资源需要单独核查风险和可靠性，不建议过度依赖。"
  }
];

if (!localStorage.getItem("resourceLibrary_v1")) {
  localStorage.setItem("resourceLibrary_v1", JSON.stringify(window.DEFAULT_RESOURCES));
}


















































































