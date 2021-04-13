import React from 'react';
export const Nav00DataSource = {
    wrapper: { className: 'header0 home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
        className: 'header0-logo',
        children:
            'https://zlhad.oss-cn-shanghai.aliyuncs.com/export/logo.svg?versionId=CAEQKRiBgMDP257zxRciIDZmYWZlYThhYTVhYjQzOWJiMWVlMjRlOTMwNzA4YzI3',
    },
    Menu: {
        className: 'header0-menu',
        children: [
            {
                name: 'item0',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [
                        {
                            children: (
                                <span>
                                    <span>
                                        <p>首页</p>
                                    </span>
                                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
                // subItem: [
                //   {
                //     name: 'sub0',
                //     className: 'item-sub',
                //     children: {
                //       className: 'item-sub-item',
                //       children: [
                //         {
                //           name: 'image0',
                //           className: 'item-image',
                //           children:
                //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                //         },
                //         {
                //           name: 'title',
                //           className: 'item-title',
                //           children: 'Ant Design',
                //         },
                //         {
                //           name: 'content',
                //           className: 'item-content',
                //           children: '企业级 UI 设计体系',
                //         },
                //       ],
                //     },
                //   },
                //   {
                //         name: 'sub1',
                //         className: 'item-sub',
                //         children: {
                //             className: 'item-sub-item',
                //             children: [
                //                 {
                //                     name: 'image0',
                //                     className: 'item-image',
                //                     children:
                //                         'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                //                 },
                //                 {
                //                     name: 'title',
                //                     className: 'item-title',
                //                     children: 'Ant Design',
                //                 },
                //                 {
                //                     name: 'content',
                //                     className: 'item-content',
                //                     children: '企业级 UI 设计体系',
                //                 },
                //             ],
                //         },
                //     },
                // ],
            },
            {
                name: 'item1',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [
                        {
                            children: (
                                <span>
                                    <span>
                                        <p>部门介绍</p>
                                    </span>
                                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
            {
                name: 'item2',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [
                        {
                            children: (
                                <span>
                                    <span>
                                        <p>精彩活动</p>
                                    </span>
                                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
            {
                name: 'item3',
                className: 'header0-item',
                children: {
                    href: 'http://sast.njupt.edu.cn',
                    children: [
                        {
                            children: (
                                <span>
                                    <p>&nbsp;旧版入口</p>
                                </span>
                            ),
                            name: 'text',
                        },
                    ],
                },
            },
        ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
    wrapper: { className: 'banner0' },
    textWrapper: { className: 'banner0-text-wrapper' },
    title: {
        className: 'banner0-title',
        children:
            'https://zlhad.oss-cn-shanghai.aliyuncs.com/export/logo.svg?versionId=CAEQKRiBgMDP257zxRciIDZmYWZlYThhYTVhYjQzOWJiMWVlMjRlOTMwNzA4YzI3',
    },
    content: {
        className: 'banner0-content',
        children: (
            <span>
                <p>&nbsp;南京邮电大学大学生科学技术协会</p>
            </span>
        ),
    },
    button: { className: 'banner0-button', children: 'Learn More' },
};
export const Banner51DataSource = {
    wrapper: { className: 'home-page-wrapper banner5' },
    page: { className: 'home-page banner5-page' },
    childWrapper: {
        className: 'banner5-title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <span>
                            <p>我们是谁</p>
                        </span>
                    </span>
                ),
                className: 'banner5-title',
            },
            {
                name: 'explain',
                className: 'banner5-explain',
                children: (
                    <span>
                        <p>&nbsp;SASTers</p>
                    </span>
                ),
            },
            {
                name: 'content',
                className: 'banner5-content',
                children: (
                    <span>
                        <p>
                            南京邮电大学大学生科学技术协会（Students’ Association for Science
                            and
                            Technology),简称SAST，中文简称南邮校科协，成立于1992年。它是在校团委指导下，依照国家法规和大学生规章制度，独立开展活动的学生科技文化及学术研究的组织，也是校团委直属的组织中唯一一个技术类的学生组织。
            </p>
                        <p>
                            我们现分为技术中心、办公中心、创新中心三大中心，其中创新中心下还设有CG爱好者协会、ERP协会、安全技术协会等九个直属社团，组织管理有序，机构设置严谨。
            </p>
                    </span>
                ),
            },
            {
                name: 'button',
                className: 'banner5-button-wrapper',
                children: {
                    href: '#',
                    className: 'banner5-button',
                    type: 'primary',
                    children: (
                        <span>
                            <p>&nbsp;了解部门</p>
                        </span>
                    ),
                },
            },
        ],
    },
    image: {
        className: 'banner5-image knevotq7ls-editor_css',
        children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
    },
};
export const Content110DataSource = {
    OverPack: {
        className: 'home-page-wrapper content11-wrapper knc12fvrv9s-editor_css',
        playScale: 0.3,
        appear: true,
        replay: true,
    },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'image',
                children:
                    'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
                className: 'title-image',
            },
            {
                name: 'title',
                children: (
                    <span>
                        <p>Igniting the Thought</p>
                    </span>
                ),
                className: 'title-h1',
            },
            {
                name: 'content~kneu708fxbi',
                className: 'kneu73hylnb-editor_css',
                children: (
                    <span>
                        <p>&nbsp;创造点亮梦想</p>
                    </span>
                ),
            },
            {
                name: 'content',
                children: (
                    <span>
                        <p>
                            {' '}
              南京邮电大学大学生科学技术协会（简称
              SAST）是在校团委指导下，独立开展活动的学生科技文化及学术研究的组织。
            </p>
                    </span>
                ),
                className: 'title-content',
            },
            {
                name: 'content~kneua630dwk',
                className: '',
                children: (
                    <span>
                        <p>&nbsp;开源平等，薪火相传。</p>
                    </span>
                ),
            },
        ],
    },
    button: {
        className: '',
        children: {
            a: {
                className: 'button',
                href: 'https://sast.njupt.edu.cn/',
                children: (
                    <span>
                        <p>&nbsp;加入我们</p>
                    </span>
                ),
                type: 'primary',
                target: '_blank',
            },
        },
    },
};
export const Feature00DataSource = {
    wrapper: { className: 'home-page-wrapper content0-wrapper' },
    page: { className: 'home-page content0' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <p>&nbsp;科协文化</p>
                    </span>
                ),
            },
        ],
    },
    childWrapper: {
        className: 'content0-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children: 'https://zlhad.oss-cn-shanghai.aliyuncs.com/img/1.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <span>
                                    <p>始于志同,行于道和</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>
                                        在科协，因为共同的兴趣、爱好、追求而结识，志趣相投方愿结伴而行。来这里，开启想象中的大学生活。
                  </p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                'https://zlhad.oss-cn-shanghai.aliyuncs.com/img/20210413010954.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <span>
                                    <p>文韬武略,样样在行</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>
                                        在科协，“技术”的一个引子，管理类创新类部门…在科协这棵繁茂大树下，无论你志在何方，总有伸展方向。
                  </p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                'https://zlhad.oss-cn-shanghai.aliyuncs.com/img/20210413010915.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <span>
                                    <p>坚守本心,薪火相传</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                                    <p>
                                        二十九年，一如既往。我们科协人一直守护着这块净土的纯粹性。去除繁杂的琐事，还原社团属性，不忘兴趣的初心，归于志趣的本质，我们与社团共同发展，与技术共同进步。
                  </p>
                                </span>
                            ),
                        },
                    ],
                },
            },
        ],
        gutter: 0,
    },
};
export const Feature60DataSource = {
    wrapper: { className: 'home-page-wrapper feature6-wrapper' },
    OverPack: { className: 'home-page feature6', playScale: 0.3 },
    Carousel: {
        className: 'feature6-content',
        dots: false,
        wrapper: { className: 'feature6-content-wrapper' },
        titleWrapper: {
            className: 'feature6-title-wrapper',
            barWrapper: {
                className: 'feature6-title-bar-wrapper',
                children: { className: 'feature6-title-bar' },
            },
            title: { className: 'feature6-title' },
        },
        children: [
            {
                title: {
                    className: 'feature6-title-text',
                    children: (
                        <span>
                            <p>数说科协</p>
                            <p>
                                <br />
                            </p>
                        </span>
                    ),
                },
                className: 'feature6-item',
                name: 'block0',
                children: [
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper knevd0wmk2o-editor_css',
                        name: 'child0',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>&nbsp;年</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '29.0',
                        },
                        children: {
                            className: 'feature6-text kneveodqbaa-editor_css',
                            children: (
                                <span>
                                    <p>南邮校科协创办至今已经走过28个年头，2020年是第29届。</p>
                                </span>
                            ),
                        },
                    },
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper',
                        name: 'child~knc1rkxt9k9',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>人</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '558',
                        },
                        children: {
                            className: 'feature6-text knevesia9jm-editor_css',
                            children: (
                                <span>
                                    <p>第29届南邮校科协各部门总计558人。</p>
                                </span>
                            ),
                        },
                    },
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper',
                        name: 'child2',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>&nbsp;㎡</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '362',
                        },
                        children: {
                            className: 'feature6-text knevewb1sbs-editor_css',
                            children: (
                                <span>
                                    <p>校科协在大学生活动中心拥有总计约362平方米的活动室空间。</p>
                                </span>
                            ),
                        },
                    },
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper knevdwp6fu-editor_css',
                        name: 'child1',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>项</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '119',
                        },
                        children: {
                            className: 'feature6-text kneve73ycn-editor_css',
                            children: (
                                <span>
                                    <p>校科协第29届中干及以上成员获得校级以上奖项119项。</p>
                                </span>
                            ),
                        },
                    },
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper',
                        name: 'child~knc1rms6wuq',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>&nbsp;项</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '47',
                        },
                        children: {
                            className: 'feature6-text knevefyojl-editor_css',
                            children: (
                                <span>
                                    <p>&nbsp;校科协2020年承办学校科技节超过47项子活动</p>
                                </span>
                            ),
                        },
                    },
                    {
                        md: 8,
                        xs: 24,
                        className: 'feature6-number-wrapper',
                        name: 'child~knc1rnc36b6',
                        number: {
                            className: 'feature6-number',
                            unit: {
                                className: 'feature6-unit',
                                children: (
                                    <span>
                                        <p>%</p>
                                    </span>
                                ),
                            },
                            toText: true,
                            children: '100%',
                        },
                        children: {
                            className: 'feature6-text knevek4b8yq-editor_css',
                            children: (
                                <span>
                                    <p>2020届毕业生中，曾经校科协成员毕业明确去向比例达100%</p>
                                </span>
                            ),
                        },
                    },
                ],
            },
        ],
    },
};
export const Teams30DataSource = {
    wrapper: { className: 'home-page-wrapper teams3-wrapper' },
    page: { className: 'home-page teams3' },
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
                        <p>&nbsp;优秀成员</p>
                    </span>
                ),
            },
        ],
    },
    blockTop: {
        className: 'block-top-wrapper',
        children: [
            {
                name: 'block0',
                className: 'block-top',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams3-top-image',
                            children:
                                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                        },
                        {
                            name: 'title',
                            className: 'teams3-top-title',
                            children: (
                                <span>
                                    <span>
                                        <p>顾怡</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-top-job',
                            children: (
                                <span>
                                    <p>
                                        2014级。第25届校科协主席、青柚工作室创始人、
                                        主导开发“南邮小程序”、“毕业照2020小程序”等。第二十届研究生支教团团长。
                  </p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-top-content',
                            children: (
                                <span>
                                    <span>
                                        <p>&nbsp;</p>
                                    </span>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'block-top',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams3-top-image',
                            children:
                                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
                        },
                        {
                            name: 'title',
                            className: 'teams3-top-title',
                            children: (
                                <span>
                                    <span>
                                        <p>谭康威</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-top-job',
                            children: (
                                <span>
                                    <p>
                                        2016级。现就职于腾讯天美L1工作室。第27届校科协主席、青柚工作室主任。
                                        江苏省“互联网+”二等奖、主持开发了南邮期末报告单系列、毕业照2020，参与开发了南邮小程序等。
                  </p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-top-content',
                            children: (
                                <span>
                                    <span>
                                        <p>&nbsp;</p>
                                    </span>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'block-top',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams3-top-image',
                            children:
                                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                        },
                        {
                            name: 'title',
                            className: 'teams3-top-title',
                            children: (
                                <span>
                                    <span>
                                        <p>张佑杰</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-top-job',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-top-content',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
        ],
    },
    block: {
        className: 'block-wrapper',
        gutter: 72,
        children: [
            {
                name: 'block0',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>鞠林</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <span>
                                        <p>曾任校科协主席</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <span>
                                        <p>
                                            <span>现为百度高级研发工程师。</span>
                                            <br />
                                        </p>
                                    </span>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>王悉宇</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>&nbsp;曾任Linux组组长</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>
                                        <span>2015级。现就职于阿里云数据库产品事业部。</span>
                                        <br />
                                    </p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>&nbsp;xxx</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block3',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>柏超宇</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <span>
                                        <p>曾任计算机部部长</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <span>
                                        <p>
                                            <span>2015级。东南大学网络空间安全硕士在读。</span>
                                            <br />
                                        </p>
                                    </span>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block4',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <span>
                                        <p>任然</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>
                                        曾<span>任校科协主席。</span>
                                    </p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <span>
                                        <p>美国第一银行高级经理。国际电信联盟“青年领袖”。</p>
                                    </span>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block5',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <span>
                                        <p>xxx</p>
                                    </span>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block6',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>&nbsp;高飞</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>曾任校科协主席</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>
                                        <span>ACM亚洲区域赛铜奖。创青春大创竞赛金奖。</span>
                                    </p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block7',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>沈天弋</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>曾任计算机部部长</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>现为Google北美总部软件工程师。</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block8',
                className: 'block',
                md: 8,
                xs: 24,
                image: {
                    name: 'image',
                    className: 'teams3-image',
                    children:
                        'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
                },
                titleWrapper: {
                    className: 'teams3-textWrapper',
                    children: [
                        {
                            name: 'title',
                            className: 'teams3-title',
                            children: (
                                <span>
                                    <p>&nbsp;xxx</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content',
                            className: 'teams3-job',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                        {
                            name: 'content1',
                            className: 'teams3-content',
                            children: (
                                <span>
                                    <p>1</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
        ],
    },
};
export const Footer10DataSource = {
    wrapper: { className: 'home-page-wrapper footer1-wrapper' },
    OverPack: { className: 'footer1', playScale: 0.2 },
    block: {
        className: 'home-page knc0jw0u3y-editor_css',
        gutter: 0,
        children: [
            {
                name: 'block0',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    className: 'logo',
                    children:
                        'https://zlhad.oss-cn-shanghai.aliyuncs.com/export/logo.svg?versionId=CAEQKRiBgMDP257zxRciIDZmYWZlYThhYTVhYjQzOWJiMWVlMjRlOTMwNzA4YzI3',
                },
                childWrapper: {
                    className: 'slogan',
                    children: [
                        {
                            name: 'content0',
                            children: (
                                <span>
                                    <blockquote>
                                        Science and Technology Association of Nanjing University of
                                        Posts and Telecommunications
                  </blockquote>
                                </span>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block1',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    children: (
                        <span>
                            <p>&nbsp;网站</p>
                        </span>
                    ),
                    className: 'kncmsl7uq4-editor_css',
                },
                childWrapper: {
                    children: [
                        {
                            name: 'link0',
                            href: 'https://sast.njupt.edu.cn/',
                            children: (
                                <span>
                                    <span>
                                        <span>
                                            <p>校科协官网</p>
                                        </span>
                                    </span>
                                </span>
                            ),
                            target: '_blank',
                        },
                        {
                            name: 'link1',
                            href: 'https://sast.njupt.edu.cn/info/',
                            children: (
                                <span>
                                    <span>
                                        <p>信息页</p>
                                    </span>
                                </span>
                            ),
                            target: '_blank',
                        },
                        {
                            name: 'link3',
                            href: 'https://cxb.njupt.edu.cn/',
                            children: (
                                <span>
                                    <span>
                                        <span>
                                            <p>南邮人</p>
                                        </span>
                                    </span>
                                </span>
                            ),
                            target: '_blank',
                        },
                        {
                            name: 'link2',
                            href: 'https://space.bilibili.com/385170291',
                            children: (
                                <span>
                                    <span>
                                        <span>
                                            <span>
                                                <p>AtSAST</p>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            ),
                            target: '_blank',
                        },
                    ],
                },
            },
            {
                name: 'block2',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    children: (
                        <span>
                            <p>联系我们</p>
                        </span>
                    ),
                },
                childWrapper: {
                    children: [
                        {
                            href: '#',
                            name: 'link0',
                            children: (
                                <span>
                                    <p>&nbsp;Mail&nbsp;to&nbsp;Us</p>
                                </span>
                            ),
                        },
                        {
                            href: '#',
                            name: 'link1',
                            children: (
                                <span>
                                    <p>&nbsp;Github</p>
                                </span>
                            ),
                        },
                    ],
                },
            },
        ],
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
        className: 'copyright',
        children: (
            <span>
                Copyright © NJUPT.SAST 1992-2021<br />
            </span>
        ),
    },
};
