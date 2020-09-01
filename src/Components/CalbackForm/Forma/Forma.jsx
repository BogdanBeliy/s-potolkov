import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import s from './Forma.module.css'




export default class Forma extends React.Component {
    render() {
        return (
            // <form action="#" method="post" className="form-horisontal">
            //     <input className="form-control" type="text" name="name" id="name"/>
            //     <input className="form-control" type="email" name="email" id="email"/>
            //     <input className={"form-control", s.phone} type="text" name="phone" id="phone"/>
            //     <button type="submit">Заказать звонок</button>
            // </form>
            <Form method="post">
                <label htmlFor="name">Имя*</label>
                    <FormControl className={s.inputForm} type="text" name="name" required/>
                <label htmlFor="email">E-mail</label>
                    <FormControl className={s.inputForm}  type="email" name="email" />
                    <label htmlFor="phone">Телефон*</label>
                    <FormControl className={s.inputForm} type="text" name="phone" required/>
                    <button type="submit" className={s.btnCalc}>Заказать звонок</button>
            </Form>
        )
    }
}