//rcc
import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {IconField} from 'primereact/iconfield'
import{InputIcon} from 'primereact/inputicon'
import {InputText} from 'primereact/inputtext'


export default class Busca extends Component {

    //equivalente a const [termoDeBusca, setTermoDeBusca] = useState('')
    state = {
        termoDeBusca: ''
    }
    
    

    onTermoAlterado = (event) => {
        console.log(event.target.value);
        this.setState({termoDeBusca: event.target.value})       //atualiza estado do componente
    }
    
    onFormSubmit = (event) => {
        //não deixa o navegador sbmeter o form
        //evita o comportamento padrão do navegador 
        event.preventDefault()
        console.log(this.state.termoDeBusca)
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>  
        <div className='flex flex-column'>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'></InputIcon>
                <InputText 
                    onChange={this.onTermoAlterado} 
                    className='w-full' 
                    placeholder={this.props.dica}
                    value = {this.state.termoDeBusca}/>
            </IconField>
            <Button
                label='OK' 
                className='mt-2 p-button-outlined'/>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
    dica: 'Buscar...'
}
