import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiReact, SiSolidity } from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    내가 뭘 할 줄 알지?
                                </li>
                                {/* <li>Console.log 잘찍음</li>
                                <li>연산자 사용할줄암!</li>
                                <li>조건문을 배움</li>
                                <li>배열 메서드를 능숙하게 다룸!</li> */}
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>간단한 컨트랙트 작성 가능...</li>
                                {/* <li>Console.log 잘찍음</li>
                                <li>연산자 사용할줄암!</li>
                                <li>조건문을 배움</li>
                                <li>배열 메서드를 능숙하게 다룸!</li> */}
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트엔드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li></li>
                                {/* <li>상태에 대해서 설명할수있음!</li>
                                <li>브라우저 랜더링 과정을 설명 할 수 있음!</li> */}
                            </ul>
                        </li>

                        {/* <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Client Component 암!</li>
                                <li>동적라우팅 사용해봄!</li>
                                <li>interface 배우는중!</li>
                                <li>any 잘씀!</li>
                            </ul>
                        </li> */}
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백엔드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiExpress />
                                <span className="md:w-[120px]">Express</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
