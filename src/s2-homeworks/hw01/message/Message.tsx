import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';

// нужно создать правильный тип вместо any - готово


export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные - готово
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>

                <img src={props.message.user.avatar}
                    id={'hw1-avatar-' + props.message.id}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                        {/*{'ВСТАВЛЯЙ СЮДА ИМЯ'}*/}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
                        {/*{'ВСТАВЛЯЙ СЮДА МЕСЭДЖ'}*/}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
