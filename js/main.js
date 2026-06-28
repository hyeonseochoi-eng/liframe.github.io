// 1. 포트폴리오 프로젝트 데이터 배열
// 나중에 새로운 사진을 추가하고 싶다면 이 배열 안에 { } 하나만 더 복사해서 추가하면 끝이야!
const portfolioData = [
    {
        id: 1,
        title: "Project 01",
        category: "시선의 기록",
        imgUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800",
        link: "#"
    },
    {
        id: 2,
        title: "Project 02",
        category: "빛과 여백",
        imgUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
        link: "#"
    },
    {
        id: 3,
        title: "Project 03",
        category: "단정한 프레임",
        imgUrl: "images/hero/olympicpark_01.jpg",
        link: "#"
    }
];

// 2. HTML에 데이터를 자동으로 그려주는 함수
function renderPortfolio() {
    const gridContainer = document.getElementById('work-grid');
    
    // 만약 HTML에 기존에 임시로 넣어둔 데이터가 있다면 싹 비워줘
    gridContainer.innerHTML = "";

    // 데이터를 하나씩 돌면서 HTML 구조를 만들어 넣어줌
    portfolioData.forEach(item => {
        const itemHTML = `
            <div class="grid-item">
                <a href="${item.link}">
                    <div class="img-box">
                        <img src="${item.imgUrl}" alt="${item.title}">
                    </div>
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.category}</p>
                    </div>
                </a>
            </div>
        `;
        // 준비된 HTML 코드를 그리드 컨테이너 안에 쏙 집어넣기
        gridContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// 3. 페이지가 로드되면 함수 실행하기
document.addEventListener('DOMContentLoaded', renderPortfolio);