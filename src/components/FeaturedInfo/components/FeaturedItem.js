import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import '../../../styles/components/featuredInfo.css'

const FeaturedItem = ({ title, money, moneyRate, sub }) => {

    const directionalArrow = moneyRate > 0 ? <ArrowUpward className="featuredIcon"/> : <ArrowDownward className="featuredIcon negative" />
    
    return (
        <div className='featured'>

            <div className='featuredItem'>
                <span className='featuredTitle'>
                    {title}
                </span>

                <div className='featuredMoneyContainer'>

                    <span className='featuredMoney'>
                        {money}
                    </span>
                    <span className='featuredMoneyRate'>
                        {moneyRate} {directionalArrow}
                    </span>

                </div>

                <span className='featuredSub'>{sub}</span>

            </div>

        </div>
    )

}


export default FeaturedItem;