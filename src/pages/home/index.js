import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo'
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import { userData } from "../../dummyData";
import '../../styles/pages/home.css'

function Home() {
    return (
        <div className="home">

            <FeaturedInfo />

            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>

        </div>
    );
}
export default Home;