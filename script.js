const resources = [
  {
    title: "SMS-Activate",
    region: "国外",
    type: "付费",
    tag: "paid",
    url: "https://sms-activate.org/cn",
    description: "老牌付费接码平台，适合 Telegram、GPT 等常见平台注册验证，支持多地区号码。"
  },
  {
    title: "SMS-BUS",
    region: "国外",
    type: "付费",
    tag: "paid",
    url: "https://coderschool.cn/go/smsbus",
    description: "付费接码平台，覆盖较广，适合海外项目和账号注册验证。"
  },
  {
    title: "5sim",
    region: "国外",
    type: "付费",
    tag: "paid",
    url: "https://5sim.net/",
    description: "提供免费与付费模式，适合多国号码需求，部分场景需要科学上网。"
  },
  {
    title: "smspva",
    region: "国外",
    type: "付费",
    tag: "paid",
    url: "https://smspva.com/",
    description: "起步价较低，适合低成本测试与临时验证使用。"
  },
  {
    title: "Onlinesim",
    region: "国外",
    type: "付费",
    tag: "paid",
    url: "https://onlinesim.io/",
    description: "国外接码平台，适合多地区项目与常见注册验证。"
  },
  {
    title: "Receive-SMS-Free",
    region: "国外",
    type: "免费",
    tag: "free",
    url: "https://receive-sms-free.cc/",
    description: "一个较常见的免费接码站点，适合临时收取验证码。"
  },
  {
    title: "Receive-SMS-Online",
    region: "国外",
    type: "免费",
    tag: "free",
    url: "https://receive-sms-online.com",
    description: "免费接码平台集合型站点，适合简单测试和临时手机号码使用。"
  },
  {
    title: "PingMe",
    region: "国外",
    type: "免费",
    tag: "free",
    url: "https://pingme.tel/",
    description: "提供临时手机号和短信接收能力，适合基础验证需求。"
  },
  {
    title: "Turtle SMS",
    region: "国外",
    type: "免费",
    tag: "free",
    url: "https://turtle-sms.xyz",
    description: "临时号码在线接收短信，适合常见海外平台验证测试。"
  },
  {
    title: "免费接码",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "https://www.goinsms.xyz",
    description: "国内常见的免费接码站点，适合基础验证场景。"
  },
  {
    title: "114SIM",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "https://www.114sim.com",
    description: "国内常见接码平台，提供常见项目的号码筛选服务。"
  },
  {
    title: "MianFeiJiema",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "https://mianfeijiema.com",
    description: "国内免费接码入口，适合小型注册验证和临时测试需求。"
  },
  {
    title: "小鸟接码",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "http://www.xnsms.com/",
    description: "国内知名接码站点，常用于临时号码验证。"
  },
  {
    title: "云接码",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "https://yunjiema.net",
    description: "国内常见接码资源站点，适合常规短信验证和测试。"
  },
  {
    title: "云短信",
    region: "国内",
    type: "免费",
    tag: "free",
    url: "https://www.materialtools.com/",
    description: "适合临时号码验证与常见国外/国内平台测试。"
  },
  {
    title: "Windows / Android 收码工具",
    region: "工具",
    type: "工具",
    tag: "tool",
    url: "#",
    description: "桌面端与移动端收码工具，可以快速复制号码、读取验证码并提高效率。"
  },
  {
    title: "国内外短信接码平台资源合集",
    region: "综合",
    type: "帖子",
    tag: "post",
    url: "#",
    description: "一篇常见的综合整理贴，适合作为资源入口和后续扩展索引页。"
  }
];

const grid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".chip");

let currentFilter = "all";

function renderCards() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = resources.filter((item) => {
    const filterMatch =
      currentFilter === "all" ||
      item.type === currentFilter ||
      item.region === currentFilter;

    const searchMatch =
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.region.toLowerCase().includes(keyword) ||
      item.type.toLowerCase().includes(keyword);

    return filterMatch && searchMatch;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>没有找到相关资源</h3>
        <p>请更换搜索关键词，或切换筛选条件再试一次。</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (item) => `
        <article class="resource-card">
          <div class="resource-meta">
            <span class="badge ${item.tag}">${item.type}</span>
            <span class="resource-region">${item.region}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="resource-link" href="${item.url}" target="_blank" rel="noreferrer noopener">
            访问网站 <span>→</span>
          </a>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);

renderCards();




















































































































































