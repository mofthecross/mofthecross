import * as d3 from "d3";
import React from "react";
import Chart from "./Chart";
import { skills } from '../../data/resumeData';


class SkillsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                children: skills
            }
        }
    }

    componentDidMount() {
      let skillupdate = this.state.data.children;
      skillupdate.map( skill => {
            let skilled = skill;
            skilled['value'] = skilled.value * 10;
            return skilled;
      })

      setTimeout(() => {
          this.setState({
              data:skillupdate
          })
      }, 3000);
    }


    componentWillMount() {
      skills.forEach( skill =>{
        let skilled = skill;
        skilled['value'] = skilled.value * 5;

      })
    }

    render () {
        return (
            <div className="chart">
              <h2>Bubble Chart</h2>
              <Chart
                    type={"bubble"}
                    diameter={500}
                    showTooltips={true}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default SkillsPage;
