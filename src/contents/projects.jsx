import { Wrapper, Heading } from '../components/common'
import { FaAws, FaExternalLinkAlt, FaHardHat } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql, DiAws } from 'react-icons/di'
import { SiExpress, SiReactquery, SiSolidity, SiTypescript, SiVelog } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'

const Projects = () => {
    // console.log("this==window", this==window);
    // console.log("this", this);

    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/bounswap.png'}
                            className="w-full"
                            alt="bounswap img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023.10.23 ~ 2023. 12. 05</li>
                            <li>contract, deploy</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Bounswap 탈중앙화 거래소 (협약 프로젝트){' '}
                            <a href="https://github.com/9oodam/BounswapContract" target='blank'>
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게 토큰 교환, 유동성 공급 기능과 다양한 수익창출의 기회를 제공하는 탈중앙화 거래소(DEX)
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiGithubBadge />
                            <SiTypescript />
                            <SiSolidity />
                            <FaHardHat />
                            <DiReact />
                            <SiReactquery />
                            <FaAws />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>Data, Governance 컨트랙트 작성</li>
                            {/* <li>컨트랙트 데이터 프론트 출력</li> */}
                            <li>AWS S3 정적 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 두번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/nobroker.png'}
                            className="w-full"
                            alt="nobroker img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 07. 28 ~ 2023. 08. 28</li>
                            <li>backend, frontend, deploy</li>
                            <li>
                                <button
                                    onClick={toggleModal2}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Nobroker 부동산 매매 사이트{' '}
                            <a href="https://github.com/zam0ng/React_Project_NoBroker" target='blank'>
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            중개사 없이 매물을 거래할 수 있는 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <SiExpress />
                            <DiMysql />
                            <DiGithubBadge />
                            <DiReact />
                            <SiReactquery />
                            <FaAws />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>팀장(업무 분배 및 일정 관리)</li>
                            <li>매물 상세 페이지, 매물 투표 페이지</li>
                            <li>AWS EC2 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 세번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/internode.png'}
                            className="w-full"
                            alt="bounswap img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>backend, frontend</li>
                            <li>
                                <button
                                    onClick={toggleModal3}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Internode 티켓 예매 사이트{' '}
                            <a href="https://github.com/zerohoney97/interNode" target='blank'>
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            티켓 예매 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <SiExpress />
                            <DiMysql />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>공연 예매 페이지</li>
                            <li>마이페이지</li>
                        </ul>
                    </div>
                </li>

            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <div>
                    <h3 className='font-bold'>dex 탈중앙화 거래소</h3>
                    <h4 className='font-bold mt-6'>기능</h4>
                    <ul>
                        <li>
                            Swap: 플랫폼 내 예치된 코인 및 토큰을 자유롭게 교환
                        </li>
                        <li>
                            Liquidity: 사용자가 원하는 토큰 2개를 페어로 플랫폼에 존재하는 풀에 원하는 양만큼 1:1로 예치하고 증서로 LP토큰을 부여받음, 해당 풀에서 스왑이 일어나면 유동성 공급자는 지분에 비례하여 수수료를 분배받음
                        </li>
                        <li>
                            Staking: 특정 LP토큰을 스테이킹 풀에 예치한 기간과 양에 따라 메인넷 코인(BNC)를 보상으로 부여
                        </li>
                        <li>Governance: 커뮤니티의 방향성에 대한 제안과 투표로 의사를 표할 수 있음</li>
                    </ul>


                    <h4 className='font-bold mt-6'>작업 내용</h4>
                    <ul>
                        <li>
                            contract : data, governance 컨트랙트 작성
                            data 컨트랙트는 프론트와 상호작용하는 컨트랙트 중 하나로, pair 기능과 관련된 데이터를 기록하는 컨트랙트이다.
                            governance 컨트랙트는 거버넌스 기능을 담당하는 컨트랙트로, 의제 제출과 투표 기능을 담당하는 컨트랙트이다.
                        </li>
                        <li>
                            front : react query를 활용하여 컨트랙트에게 응답받은 데이터를 기록
                        </li>
                        <li>
                            deploy : AWS S3 정적 배포
                        </li>
                    </ul>


                    <h4 className='font-bold mt-6'>구현 페이지</h4>
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap.png'} className='h-[300px] mx-auto' />
                            <span>swap 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_tokens.png'} className='h-[300px] mx-auto' />
                            <span>token dashboard 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_tokenDetail.png'} className='h-[300px] mx-auto' />
                            <span>token detail 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_pools.png'} className='h-[300px] mx-auto' />
                            <span>pool dashboard 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_poolDetail.png'} className='h-[300px] mx-auto' />
                            <span>pool detail 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_stake.png'} className='h-[300px] mx-auto' />
                            <span>stake dashboard 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_governance.png'} className='h-[300px] mx-auto' />
                            <span>governance 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_sidebar.png'} className='h-[300px] mx-auto' />
                            <span>sidebar</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/bounswap_mobile.gif'} className='h-[300px] mx-auto' />
                            <span>모바일 구현</span>
                        </li>
                    </ul>

                </div>

            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>

                <div>
                    <h3 className='font-bold'>부동산 매물을 거래할 수 있는 매매 사이트</h3>
                    <h4 className='font-bold mt-6'>기능</h4>
                    판매자가 매물을 등록하면 사업자 회원들이 해당 매물에 대한 진위 여부를 투표하고, 투표 결과에 따라 매물 목록에 등록됨
                    구매자는 매물 목록 페이지의 매물을 상세 페이지에서 확인할 수 있고, 거래 신청을 할 수 있음
                    판매자와 구매자는 마이페이지에서 매물을 거래할 수 있음
                    <ul>
                        <li>로그인</li>
                        <li>회원가입 : 사업자 회원, 일반 회원을 선택하여 회원가입 가능</li>
                        <li>
                            매물 등록 : 매물의 정보와 사진을 입력하여 등록할 수 있음. 매물 등록에는 multer를 활용하였음
                        </li>
                        <li>
                            매물 목록 : 거래 가능한 매물 목록을 띄워줌. 찜하기, 조건별 검색이 가능함. 구글 맵 api를 활용하였음.
                        </li>
                        <li>
                            매물 상세 : 매물의 상세 정보를 보여줌. 댓글, 대댓글, 찜하기 기능이 있고 거래 신청이 가능함
                        </li>
                        <li>투표 : 등록된 매물의 진위 여부를 판별하기 위한 기능. 사업자 회원들만 투표 가능함</li>
                        <li>마이페이지: 등록, 구매한 매물 목록을 확인할 수 있고, 매물 거래가 가능함</li>
                    </ul>


                    <h4 className='font-bold mt-6'>작업 내용</h4>
                    <ul>
                        <li>
                            <ul>
                                매물 상세
                                <li>front : 특정 매물의 상세 정보를 띄워줌. 여러 이미지를 보여주기 위해 이미지 슬라이드 기능을 구현함.</li>
                                <li>back : mysql에서 매물의 상세 정보를 프론트에 반환하는 api를 작성함</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                매물 투표
                                <li>front, back : 투표 기능 작성</li>
                            </ul>
                        </li>
                        <li>
                            deploy : AWS EC2 배포
                        </li>
                    </ul>


                    <h4 className='font-bold mt-6'>구현 페이지</h4>
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/nobroker_main.png'} className='h-[300px] mx-auto' />
                            <span>메인 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/nobroker_list.png'} className='h-[300px] mx-auto' />
                            <span>매물 목록 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/nobroker_detail.png'} className='h-[300px] mx-auto' />
                            <span>매물 상세 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/nobroker_voteList.png'} className='h-[300px] mx-auto' />
                            <span>매물 투표 목록 페이지</span>
                        </li>
                    </ul>

                </div>




            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <div>
                    <h3 className='font-bold'>티켓을 예매할 수 있는 사이트</h3>
                    <h4 className='font-bold mt-6'>기능</h4>
                    <ul>
                        <li>공연 목록 : 예매 가능한 공연 목록 확인 가능</li>
                        <li>예매 : socket.io를 사용하여 공연 예매 구현</li>
                        <li>리뷰 : 공연에 대한 리뷰 작성 가능</li>
                        <li>게시판 : 자유로운 게시글 작성</li>
                        <li>관리자 : 유저 관리 및 공연 등록. socket.io를 사용하여 채팅 기능 구현</li>
                        <li>마이페이지 : 개인 정보 수정 및 예매 내역 확인 가능</li>
                    </ul>

                    <h4 className='font-bold mt-6'>작업 내용</h4>
                    <ul>
                        <li>
                            공연 예매 기능 구현 : socket.io 사용
                        </li>
                        <li>마이 페이지 : 예매 내역/공연 후기 목록 출력, 작성, 수정, 삭제 기능</li>
                    </ul>


                    <h4 className='font-bold mt-6'>구현 페이지</h4>
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_list2.png'} className='h-[300px] mx-auto' />
                            <span>메인 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_detail1.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_detail2.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_detail3.png'} className='h-[300px] mx-auto' />
                            <span>상세 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_ticketing.png'} className='h-[300px] mx-auto' />
                            <span>예매 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_list2.png'} className='h-[300px] mx-auto' />
                            <span>메인 페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_mypage.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_addReview.png'} className='h-[300px] mx-auto' />
                            <span>마이페이지</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_freeboard.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_insertFreeboard.png'} className='h-[300px] mx-auto' />
                            <span>자유게시판</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_chat.png'} className='h-[300px] mx-auto' />
                            <span>문의하기</span>
                            <img src={process.env.PUBLIC_URL + '/internode_admin_user.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_admin_chat.png'} className='h-[300px] mx-auto' />
                            <img src={process.env.PUBLIC_URL + '/internode_admin_chat_detail.png'} className='h-[300px] mx-auto' />
                            <span>관리자</span>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/internode_signup.png'} className='h-[300px] mx-auto' />
                            <span>회원가입 페이지</span>
                        </li>
                    </ul>
                    
                    <a href="https://velog.io/@ahyeona/%EB%85%B8%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="_blank" rel="noopener noreferrer"><SiVelog /></a>
                    
                </div>

            </Modal>
        </Wrapper>
    )
}

export default Projects
