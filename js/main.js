// 1. 포트폴리오 데이터 (요청하신 6개 섹션으로 구성)
const portfolioData = [
    {
        id: 1,
        title: "풍경사진",
        category: "Landscape Photography",
        imgUrl: "images/hero/dongjakbridge_01.jpg", // 풍경 대표 사진 경로
        description: "자연, 도시, 장소를 가리지 않고 나타나는 아름다운 순간들을 한 장에 남깁니다.",
        subImages: [
            { url: "images/hero/banpo_01.jpg", title: "하늘을 수놓은 구름깃", caption: "반포한강공원의 새빛섬 너머로 보이는 아파트, 그 뒤로 펼쳐진 노을. 마치 깃털처럼 하늘을 수놓은 구름을 한 장으로 담았습니다" },
            { url: "images/hero/dongjakbridge_01.jpg", title: "빛이 머문 서울의 오후", caption: "동작대교에서 바라다본 여의도, 구름 사이로 쏟아져나온 빛이 프레임을 부드럽게 감싸며 노을의 빛으로 물든 순간을 담았습니다." },
            { url: "images/hero/olympicpark_01.jpg", title: "지금 이 순간", caption: "올림픽공원의 5경 나홀로나무, 넓은 들판 사이 홀로 서있는 나무를 부드럽게 감싼 노을빛과, 그 들판에서 자기만의 시간을 즐기는 사람들을 멀리서 넓게 담았습니다." },
            { url: "images/portfolio/p1_04.jpg", title: "풍경 작품 4", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_05.jpg", title: "풍경 작품 5", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_06.jpg", title: "풍경 작품 6", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_07.jpg", title: "풍경 작품 7", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_08.jpg", title: "풍경 작품 8", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_09.jpg", title: "풍경 작품 9", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p1_10.jpg", title: "풍경 작품 10", caption: "마지막 풍경 사진의 해설입니다." }
        ]
    },
    {
        id: 2,
        title: "인물사진",
        category: "Portrait Photography",
        imgUrl: "images/hero/tiotena_01.jpg", // 인물 대표 사진 경로
        description: "가장 아름다운 때는 지금, 순간을 한 장에 담습니다",
        subImages: [
            { url: "images/hero/deoksu_portrait.jpg", title: "연인, 사랑", caption: "한복을 입고 사랑을 나누는 연인의 순간, 살짝 흔들려서 흐릿하지만 더욱 선명히 남는 기억처럼 한 장으로 담겼습니다" },
            { url: "images/hero/gyeonbok_portrait 4.jpg", title: "포옹", caption: "궁 앞에서 연인의 포옹을 연속되게 찍어 한 프레임에 담았습니다." },
            { url: "images/hero/mangwon_portrait_01.jpg", title: "마주잡은 손", caption: "한강과 맞닿은 강변, 두 사람 너머로는 파란 강물이, 그 주변을 둘러싼 자연은 가운데의 두 사람을 마치 액자 속 그림처럼 만들어줍니다" },
            { url: "images/hero/olympicpark_port_01.jpg", title: "빗속의 사람", caption: "비가 내리는 날, 우산에 맺힌 빗물 너머로 보이는 사람의 모습을 담았습니다" },
            { url: "images/portfolio/p2_05.jpg", title: "인물 작품 5", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p2_06.jpg", title: "인물 작품 6", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p2_07.jpg", title: "인물 작품 7", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p2_08.jpg", title: "인물 작품 8", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p2_09.jpg", title: "인물 작품 9", caption: "해설을 채워 넣으세요." },
            { url: "images/portfolio/p2_10.jpg", title: "인물 작품 10", caption: "마지막 인물 사진의 해설입니다." }
        ]
    },
    {
        id: 3,
        title: "보도사진(저널리즘)",
        category: "Photojournalism",
        imgUrl: "images/hero/jamsil_journalism_02.jpg", // 보도 대표 사진 경로
        description: "가장 정직한 사진, 현장을 전달할 수 있는 한 장을 담습니다.",
        subImages: [
            { url: "images/hero/jamsil_journalism_02.jpg", title: "침묵의 아우성", caption: "2026.06.03 지방선거에서 참정권이 침해당한 국민들이 잠실 올림픽공원 핸드볼경기장에 모여 재선거를 요구하던 집회 현장의 기록 - 01" },
            { url: "images/hero/jamsil_journalism_01.jpg", title: "민중의 외침", caption: "2026.06.03 지방선거에서 참정권이 침해당한 국민들이 잠실 올림픽공원 핸드볼경기장에 모여 재선거를 요구하던 집회 현장의 기록 - 02" },
            { url: "images/hero/jamsil_journalism_03.jpg", title: "펜은 칼보다 강하다", caption: "2026.06.03 지방선거에서 참정권이 침해당한 국민들이 잠실 올림픽공원 핸드볼경기장에 모여 재선거를 요구하던 집회 현장의 기록 - 03" },
            { url: "images/hero/jamsil_journalism_04.jpg", title: "vote", caption: "2026.06.03 지방선거에서 참정권이 침해당한 국민들이 잠실 올림픽공원 핸드볼경기장에 모여 재선거를 요구하던 집회 현장의 기록 - 04" },
        
        ]
    },
    {
        id: 4,
        title: "드론사진",
        category: "Drone Photography",
        imgUrl: "images/hero/drone_yeouido_05.jpg", // 드론 대표 사진 경로
        description: "우리가 닿을 수 없는 높이에서, 색다른 시선으로 세상을 바라봅니다.",
        subImages: [
            { url: "images/hero/drone_bangameouri_01.jpg", title: "노을빛 질주", caption: "해질녘 바닷가, 두 사람이 달리는 모습을 드론으로 담았습니다." },
            { url: "images/hero/drone_jamsil_01.jpg", title: "수로, 그리고 차로", caption: "잠실대교에서 쏟아져나오는 물의 길과 자동차가 달리는 길이 한 프레임에 담겨있습니다" },
            { url: "images/hero/drone_deoksum_01.jpg", title: "하늘에서 바라본 곡선", caption: "뚝섬한강공원을 가로지르는 곡선 교차로를 하늘에서 담았습니다." },
            { url: "images/hero/drone_ilsan_lakepark_01.jpg", title: "삼향", caption: "일산호수공원 주제광장을 하늘 위에서 올려다보면, 행복을 상징하는 세잎클로버같은 모양이 나타납니다." },
            { url: "images/hero/drone_yeouido_03.jpg", title: "더현대 스카이", caption: "더현대 서울을 위에서 내려다보면 마치 바둑판같은 모습이 드러납니다, 한없이 넓은 것 같던 옥상정원이 한눈에 내려다보여집니다" },
            { url: "images/hero/drone_yeouido_02.jpg", title: "여의도를 가로지르며", caption: "여의도를 가로지르는 당산철교 위 2호선이 절묘히 담겨있습니다" },
            { url: "images/hero/drone_yeouido_04.jpg", title: "저 강 건너", caption: "마포대교 건너 강북의 풍경이 하늘 위에서 한눈에 담겼습니다" },
            { url: "images/hero/seokchon_drone_2.jpg", title: "벚꽃이 흐드러진 호숫가", caption: "벚꽃이 핀 봄날, 석촌호수를 하늘 위에서 담았습니다" },
            { url: "images/hero/drone_busan_01.jpg", title: "부산의 아침", caption: "부산의 상징과도 같은 광안대교, 날이 흐렸어도 돋보이는 매력을 하늘 위에서 담았습니다" },
            { url: "images/hero/drone_jaebudo.jpg", title: "26년의 첫 태양", caption: "2026년 1월 1일, 새해의 태양과 함께 떠오른 드론이 담아낸 새해 첫 일출입니다." }
        ]
    },
    {
        id: 5,
        title: "순수사진",
        category: "Fine Art Photography",
        imgUrl: "images/hero/moss_light.jpg", // 순수미술 대표 사진 경로
        description: "사진으로 우리에게 전할수 있는건 한계가 있습니다. 사진이 무의식적으로 전하는 언어와, 의식적으로 전할 수 있는 언어의 수단, 모스 부호를 접목시킨 예술세계를 기록하고 있습니다.",
        subImages: [
            { url: "images/hero/moss_light.jpg", title: "빛", caption: "빛은 우리가 세상을 보게 하는 가장 기초적인 수단입니다." },
            { url: "images/hero/moss_flower.jpg", title: "꽃잎", caption: "봄의 꽃 하면 가장 먼저 생각나는 벚꽃, 분홍빛 사이 스며든 흑백으로 나타낸 꽃은 색다른 모습으로 다가옵니다" },
        ]
    },
    

];

// 2. 메인 화면에 포트폴리오 그리드를 그려주는 함수
function renderPortfolio() {
    const gridContainer = document.getElementById('work-grid');
    if (!gridContainer) return;
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

// 3. 프로젝트 클릭 시 모달 팝업 열기 함수
function openModal(id) {
    const project = portfolioData.find(item => item.id === id);
    if (!project) return;

    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body');

    // 개별 제목과 해설을 포함하여 HTML 조립
    let subImagesHTML = "";
    project.subImages.forEach(img => {
        subImagesHTML += `
            <div class="modal-image-wrapper">
                <img src="${img.url}" alt="${img.title}">
                <div class="modal-item-caption-box">
                    <h4 class="modal-item-title">${img.title}</h4>
                    <p class="modal-item-caption">${img.caption}</p>
                </div>
            </div>
        `;
    });

    modalBody.innerHTML = `
        <h2 class="modal-project-title">${project.title}</h2>
        <p class="modal-project-desc">${project.description}</p>
        <div class="modal-gallery">
            ${subImagesHTML}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', renderPortfolio);