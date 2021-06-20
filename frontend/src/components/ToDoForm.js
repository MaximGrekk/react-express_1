import React from 'react'
import ToDoLi from './ToDoLi.js'

const styles = {
    paragraph: {
        fontStyle: 'italic'
    },
    del: {

    },
    input: {
        outline: 'none'
    }
}

export default class toDoForm extends React.Component {
    constructor(props) {
        super(props) // вызывает родительский конструктор
        this.state = {
            input: '',
            items: [],
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onChange(e) {
        this.setState({input: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault(); // чтобы не обновлялась страница
        
        let newItem = {
            id: Math.random().toString(10).substr(0, 7),
            body: this.state.input,
        }
        if(this.state.input) {
            this.setState({
                input: this.state.input,
                items: [...this.state.items, newItem],
            });   
    
            this.setState({
                input: ''
            }); 
        }
        

        
    }
    onDelete(id) {
        this.setState({items: this.state.items.filter((item) => item.id !== id)});  
    }

    

    render() {
        return (
            <div className="card">
                <form onSubmit={this.onSubmit} className="d-flex justify-content-center mt-4">
                    <input type="text" value={this.state.input} onChange={this.onChange}
                    className="border shadow-sm mx-2 p-2" placeholder="Введите заметку..."
                    style={styles.input}
                    />
                    <button type="submit" className="btn btn-secondary shadow-sm">Сохранить</button>
                </form>
                <p className="text-center pt-4" style={styles.paragraph}>{this.state.input}</p>

                <ul className="list-group">
                    {this.state.items.map((item, index) => {
                        return (
                            <ToDoLi key={index} item={item.body} index={index} id={item.id} onDelete={this.onDelete} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}