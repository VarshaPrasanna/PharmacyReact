export default function MessageCard(props) {
    return (
        <div class="card border-secondary row w-75 mx-auto">
            <div class="list-group-item">
                {props.msg.firstName}<div className="msg-date">{props.msg.date.slice(0, 10)}</div>
            </div>
            <div class="card-body">
                <p class="card-text">{props.msg.message}</p>
            </div>

            {props.msg.replies && 
                    <div>
                        <p class="card-header text-secondary mb-2">Replies</p>
                        <div class="card ml-5 mr-2 mb-3">
                            <div class="card-body">
                                <p class="card-text">{props.msg.replies}</p>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}