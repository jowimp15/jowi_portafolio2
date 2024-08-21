import "./TopicsComponent.css";

export default function TopicsComponent({textTopics = "", IDSection}){


    return(
        <div className="topics" id={IDSection}>
            <div className="topics-container_title">
                <h3 className="topics-title">{textTopics}</h3>
            </div>
        </div>
    )
}