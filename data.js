const STORAGE_KEY = "resourceLibrary_v1";

const defaultResources = [
  {
    id: 1,
    title: "SMS-Activate",
    url: "https://sms-activate.org/cn",
    type: "付费",
    region: "国外",
    status: "已验证",
    tags: ["Telegram", "GPT", "国外"],
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
    notes: "可作为免费兜底站点，但稳定性和可用号码数量可能不如付费平台。"
  },
  {
    id: 3,
    title: "免费接码",
    url: "https://www.goinsms.xyz",
    type: "免费",
    region: "国内",
    status: "待验证",
    tags: ["国内", "免费"],
    description: "国内常见的免费接码站点，适合基础验证场景使用。",
    notes: "多用于国内项目的临时收码验证，需要定期更新与筛查有效性。"
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
    notes: "可做常备站点，建议保留多个备用入口以应对失效。"
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
    notes: "部分功能需要科学上网，且用户体验会受到地区和号码库存影响。"
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
    notes: "可作为资源库的总入口，后续新增站点可继续挂载进来。"
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

function getResources() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultResources));
    return [...defaultResources];
  }
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length ? parsed : [...defaultResources];
  } catch (error) {
    return [...defaultResources];
  }
}

function saveResources(resources) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
}

function getStatusClass(status) {
  if (status === "待验证") return "warn";
  if (status === "失效") return "danger";
  return "";
}

function renderHomePage() {
  const searchInput = document.getElementById("searchInput");
  const list = document.getElementById("resourceList");
  const tableBody = document.getElementById("resourceTableBody");
  const statTotal = document.getElementById("statTotal");
  const statFree = document.getElementById("statFree");
  const statPaid = document.getElementById("statPaid");
  const bannerTotal = document.getElementById("bannerTotal");
  const bannerPending = document.getElementById("bannerPending");
  const bannerVerified = document.getElementById("bannerVerified");
  const filterTabs = document.querySelectorAll(".filter-tab");

  let currentFilter = "all";

  const refreshStats = (items) => {
    statTotal.textContent = items.length;
    statFree.textContent = items.filter((item) => item.type === "免费").length;
    statPaid.textContent = items.filter((item) => item.type === "付费").length;
    bannerTotal.textContent = items.length;
    bannerPending.textContent = items.filter((item) => item.status === "待验证").length;
    bannerVerified.textContent = items.filter((item) => item.status === "已验证").length;
  };

  const render = () => {
    const resources = getResources();
    const keyword = (searchInput?.value || "").trim().toLowerCase();

    const filtered = resources.filter((item) => {
      const filterMatch =
        currentFilter === "all" || item.type === currentFilter || item.region === currentFilter;
      const searchMatch =
        !keyword ||
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        item.tags.join(" ").toLowerCase().includes(keyword) ||
        item.region.toLowerCase().includes(keyword) ||
        item.type.toLowerCase().includes(keyword);

      return filterMatch && searchMatch;
    });

    refreshStats(resources);

    list.innerHTML = filtered.length
      ? filtered
          .map(
            (item) => `
              <article class="resource-card">
                <div class="resource-meta">
                  <span class="badge ${item.type === "免费" ? "free" : item.type === "付费" ? "paid" : item.type === "工具" ? "tool" : "post"}">${item.type}</span>
                  <span class="resource-region">${item.region}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-bottom-row">
                  <span class="status-pill ${getStatusClass(item.status)}">${item.status}</span>
                  <a class="resource-link" href="details.html?id=${item.id}">查看详情 →</a>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">没有找到对应资源，请调整筛选或关键词。</div>`;

    tableBody.innerHTML = filtered.length
      ? filtered
          .map(
            (item) => `
              <tr>
                <td><a href="details.html?id=${item.id}" class="table-title">${item.title}</a></td>
                <td>${item.type}</td>
                <td>${item.region}</td>
                <td><span class="status-pill ${getStatusClass(item.status)}">${item.status}</span></td>
                <td>${item.description}</td>
                <td>
                  <a class="inline-action" href="details.html?id=${item.id}">详情</a>
                  <button class="inline-action delete" type="button" data-delete-id="${item.id}">删除</button>
                </td>
              </tr>
            `
          )
          .join("")
      : `<tr><td colspan="6"><div class="empty-state">暂无资源</div></td></tr>`;

    document.querySelectorAll("[data-delete-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = Number(button.getAttribute("data-delete-id"));
        const next = getResources().filter((item) => item.id !== id);
        saveResources(next);
        render();
      });
    });
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentFilter = tab.dataset.filter;
      filterTabs.forEach((btn) => btn.classList.toggle("active", btn === tab));
      render();
    });
  });

  searchInput.addEventListener("input", render);

  const form = document.getElementById("resourceForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newItem = {
      id: Date.now(),
      title: formData.get("title").toString().trim(),
      url: formData.get("url").toString().trim(),
      type: formData.get("type").toString(),
      region: formData.get("region").toString(),
      status: formData.get("status").toString(),
      tags: (formData.get("tags") || "")
        .toString()
        .split(/[，,]/)
        .map((tag) => tag.trim())
        .filter(Boolean),
      description: formData.get("description").toString().trim() || "暂无备注。",
      notes: formData.get("description").toString().trim() || "暂无备注。"
    };

    if (!newItem.title || !newItem.url) return;

    const resources = getResources();
    resources.unshift(newItem);
    saveResources(resources);
    form.reset();
    render();
    document.getElementById("jumpToAdd").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("jumpToAdd").addEventListener("click", () => {
    document.getElementById("quick-add").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
}

function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const resources = getResources();
  const item = resources.find((entry) => entry.id === id) || resources[0];

  if (!item) return;

  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailSummary").textContent = item.description;
  document.getElementById("detailRegion").textContent = item.region;
  document.getElementById("detailType").textContent = item.type;
  document.getElementById("detailTags").textContent = item.tags?.length ? item.tags.join(" / ") : "无";
  document.getElementById("detailStatus").textContent = item.status;
  document.getElementById("detailStatus").className = `status-pill ${getStatusClass(item.status)}`;
  document.getElementById("detailNotes").textContent = item.notes || "暂无详细备注。";

  const detailLink = document.getElementById("detailLink");
  const openSourceLink = document.getElementById("openSourceLink");
  detailLink.href = item.url;
  openSourceLink.href = item.url;

  const badges = document.getElementById("detailBadges");
  badges.innerHTML = [item.type, item.region, item.status]
    .map((label) => `<span class="detail-badge">${label}</span>`)
    .join("");

  document.getElementById("removeItem").addEventListener("click", () => {
    const updated = getResources().filter((entry) => entry.id !== item.id);
    saveResources(updated);
    window.location.href = "index.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") renderHomePage();
  if (page === "detail") renderDetailPage();
});
