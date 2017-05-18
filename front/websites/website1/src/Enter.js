/**
 * Created by admin on 2017/5/17.
 */
import React, { Component } from 'react';
import './Enter.css';
class Enter extends Component {
    render() {
        return (
            <div className="indexBox">
                <Welcome/>
                <IndexLink/>
            </div>
        );
    }
}
class IndexLink extends Component {
    render() {
        return (
          <div className="indexLink">
              <button>编程</button>|<button>手工</button>|<button>绘画</button>|<button>生活</button>|<button>关于</button>
          </div>
        );
    }
}
class Welcome extends Component {
    render() {
        return (
            <div className="welcomeMsg">
                这是
            </div>
        );
    }
}

export default Enter;