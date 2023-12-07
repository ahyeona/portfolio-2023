import { Wrapper, Heading } from '../components/common'
import { FaAws, FaExternalLinkAlt, FaHardHat } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql, DiAws } from 'react-icons/di'
import { SiReactquery, SiSolidity, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'

const Projects = () => {
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
                            src=""
                            className="w-full"
                            alt="bounswap img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023.10.23 ~ 2023. 12. 05</li>
                            <li>contract</li>
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
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게 토큰 교환, 유동성 공급 기능과 다양한 수익창출의 기회를 제공하는 탈중앙화 거래소(DEX)
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
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
                            <li>프론트 컨트랙트 데이터 요청 응답</li>
                            <li>AWS S3 정적 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 두번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="bounswap img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 07. 28 ~ 2023. 08. 28</li>
                            <li>backend, frontend</li>
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
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            nobroker 상세
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiMysql />
                            <DiGithubBadge />
                            <DiReact />
                            <SiReactquery />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>팀장</li>
                            <li>매물 상세 페이지, 매물 투표 페이지</li>
                            <li>AWS EC2 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 세번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="bounswap img"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>backend, frontend</li>
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
                            Internode 티켓 예매 사이트{' '}
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            internode 상세
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiMysql />
                            <DiGithubBadge />
                            {/* <SiTypescript /> */}
                            {/* <DiTrello /> */}
                            {/* <DiReact /> */}
                            {/* <SiNextdotjs /> */}
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
                    dex 탈중앙화 거래소
                    <h4>기능</h4>
                    <ul>
                        <li>스왑 : 두 개의 토큰끼리 교환하는 기능</li>
                        <li>유동성 공급/제거 : 뭐더라 </li> 
                        <li>스테이킹 : 뭐더라 </li>
                        <li>거버넌스 : 뭐더라 </li>
                    </ul>


                    <h4>담당 역할</h4>
                    <ul>
                        <li>오키오키</li>
                    </ul>
                </div>

            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                nobroker 상세

                부동산 매물을 거래할 수 있는 매매 사이트
                
                로그인, 회원가입, 매물 목록, 매물 등록, 매물 상세, 매물 투표, 마이페이지 기능
                
                판매자가 매물을 등록하면 사업자 회원들이 해당 매물에 대한 진위 여부를 투표하고, 투표 결과에 따라 매물 목록에 등록됨
                구매자는 매물 목록 페이지의 매물을 상세 페이지에서 확인할 수 있고, 거래 신청을 할 수 있음
                판매자와 구매자는 마이페이지에서 매물을 거래할 수 있음

            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                internode 상세
            </Modal>
        </Wrapper>
    )
}

export default Projects
