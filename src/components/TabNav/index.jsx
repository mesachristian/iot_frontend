import './styles.css';

export default function TabNav(props){

    let content = '';
    let activeTab = '';
    const tabs = props.children.map( (child) => {
        if(child.props.active){
            content = child.props.children;
            activeTab = child.props.name;
        }
        return child.props.name;
    });
    
    return(
        <div className="tab-nav">
            <div>
                <ul className="tab-nav-nav">
                    {tabs.map( (tabName, tabIdx) => {
                        const style = (activeTab === tabName) ? 'tab-nav-item-active' : 'tab-nav-item-normal';
                        return(
                            <li key={tabIdx} className={style} onClick={() => props.onTabClick(tabIdx)}>
                                {tabName}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="tab-nav-content">
                {content}
            </div>
        </div>
    );
}