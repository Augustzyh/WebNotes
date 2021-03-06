import React, {Component} from 'react';
import {Link} from "react-router-dom"
class Product extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 1,
                    title: "aaaa",
                    content: "再过两天，首届中国国际进口博览会将在上海开幕。这不是中国的独唱，而是各国的合唱。130多个国家和地区的3000多家企业，带着各具特色的优质产品和服务闪亮登场，迈出在中国市场新的一步。"
                },
                {
                    id: 2,
                    title: "bbbb",
                    content: "记者从中国铁路总公司获悉，11月3日，改版升级的中国铁路12306网站正式上线运营，网站客运服务功能更趋完善，旅客购票将更加方便快捷。\n" +
                        "\n" +
                        "铁路12306网站负责人介绍，推出新版12306网站，是铁路部门坚持以人民为中心的发展思想，实施铁路客运提质计划，更好地为旅客提供购票服务的重要举措。"
                },
                {
                    id: 3,
                    title: "cccc",
                    content: "经查，蒲波违反政治纪律，对抗组织审查；违反中央八项规定精神，接受可能影响公正执行公务的宴请和旅游安排；违反组织纪律，利用职务便利违规为他人在干部选拔任用方面提供帮助，组织函询时不如实说明问题，不按规定报告个人有关事项；违反廉洁纪律，以赌博方式敛取巨额钱财，通过“大赌”“假赌”大搞权钱交易，违规经商办企业，违规拥有非上市公司股份股权和购买定向增发股票；违反生活纪律。利用职务上的便利和职权、地位形成的便利条件为他人谋取利益并收受巨额财物，涉嫌受贿犯罪。"
                },
                {
                    id: 4,
                    title: "dddd",
                    content: "经济日报-中国经济网北京11月3日讯一家总资产超过1000亿元的国企，9月的一次人事调整在最近引起广泛关注和讨论：该公司法人、董事长兼总经理由一名“80后”担任，而两位新任董事皆为“90后”，一名出生于1993年，另一名出生于1995年——后者大学毕业仅一年。"
                },
                {
                    id: 5,
                    title: "eeee",
                    content: "为贯彻落实国务院11月1日召开的全国非洲猪瘟疫情防控工作电视电话会议精神，国家邮政局第一时间下发紧急通知，对进一步做好寄递渠道非洲猪瘟疫情防控工作作出部署。"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <p>这是商品</p>
                <ul>
                    {
                        this.state.list.map((item,idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={`/productsList?id=${item.id}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Product;