// 1. 확장된 포트폴리오 데이터 (상세 사진 및 해설 추가)
const portfolioData = [
    {
        id: 1,
        title: "Project 01",
        category: "시선의 기록",
        imgUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800",
        // 상세 페이지에 들어갈 콘텐트
        description: "찰나의 순간, 시선이 머무는 곳의 기록입니다.",
        subImages: [
            { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800", caption: "첫 번째 시선: 정적 속의 움직임" }
        ]
    },
    {
        id: 2,
        title: "Project 02",
        category: "빛과 여백",
        imgUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
        description: "공간을 채우는 빛과, 그보다 더 많은 것을 말하는 여백에 관하여.",
        subImages: [
            { url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800", caption: "빛의 궤적" }
        ]
    },
    {
        id: 3,
        title: "Project 03",
        category: "단정한 프레임",
        imgUrl: "images/hero/olympicpark_01.jpg",
        description: "올림픽공원의 사계절과 구조적 미학을 담은 시리즈입니다. 불필요한 풍경을 걷어내고 피사체의 본질에 집중했습니다.",
        // 💡 여기에 해당 주제의 사진들을 여러 장, 해설과 함께 마음껏 추가할 수 있어!
        subImages: [
            { 
                url: "images/hero/olympicpark_01.jpg", 
                caption: "나홀로나무의 대칭미. 맑은 하늘과 대비되는 정적인 실루엣을 강조했습니다." 
            },
            { 
                url: "https://images.unsplash.com/photo-1493863641943-9b689da23bad?w=800", 
                caption: "두 번째 조각: 안개 낀 아침의 서정적인 색감." 
            }
        ]
    }
];

// 2. 메인 그리드 렌더링 함수
function renderPortfolio() {
    const gridContainer = document.getElementById('work-grid');
    gridContainer.innerHTML = "";

    portfolioData.forEach(item => {
        const itemHTML = `
            <div class="grid-item" onclick="openModal(${item.id})">
                <div class="img-box">
                    <img src="${item.imgUrl}" alt="${item.title}">
                </div>
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            </div>
        `;
        gridContainer.insertAdjacentHTML('beforeend', itemHTML);
    });
}

// 3. 모달 열기 함수 (클릭 시 실행)
function openModal(id) {
    const project = portfolioData.find(item => item.id === id);
    if (!project) return;

    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body');

    // 상세 사진과 해설들을 HTML로 조립
    let subImagesHTML = "";
    project.subImages.forEach(img => {
        subImagesHTML += `
            <div class="modal-image-wrapper">
                <img src="${img.url}" alt="상세이미지">
                <p class="image-caption">${img.caption}</p>
            </div>
        `;
    });

    // 모달 내부 콘텐트 완성
    modalBody.innerHTML = `
        <h2 class="modal-project-title">${project.title}</h2>
        <p class="modal-project-desc">${project.description}</p>
        <div class="modal-gallery">
            ${subImagesHTML}
        </div>
    `;

    // 모달창 보이기
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 뒤쪽 메인화면 스크롤 방지
}

// 4. 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // 스크롤 원상복구
}

document.addEventListener('DOMContentLoaded', renderPortfolio);