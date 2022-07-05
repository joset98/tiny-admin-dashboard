import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import FeaturedItem from './components/FeaturedItem';
import '../../styles/components/featuredInfo.css'

const FeaturedInfo = () => {

    return (
        <div className='featured'>

            <FeaturedItem title={'Revenue'} money='$2,415' moneyRate={-11.4} sub='Compared to last month' />
            <FeaturedItem title={'Sales'} money='$4,415' moneyRate={-1.4} sub='Compared to last month' />
            <FeaturedItem title={'Cost'} money='$9,415' moneyRate={2.4} sub='Compared to last month' />

        </div>
    )

}

export default FeaturedInfo;