//rafce
import React from 'react'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Busca from './Busca'
import {createClient} from 'pexels'

export default class App extends React.Component {

    pexelsClient = null
    
    onBuscaRealizada = (termoDeBusca) => {
        this.pexelsClient.photos.search({
            query: termoDeBusca})
            .then((result => console.log(result)))
    }

    //executa um código após construção do objeto
    componentDidMount(){
        this.pexelsClient = createClient('20FuZCakXzRS4AtCezvajraxB0F0dWzcjFN1OSJSaOUPseS3EzPrdtcf')
    }
    render(){
        return (
        <div className='grid justify-content-center m-auto w-9 border-round border-1'>

            <div className='col-12'>
                <i className="pi pi-apple"></i>
            </div>
            <div className='col-12'>
                <h1>Exibir uma lista de ... </h1>
            </div>
            <div className='col-12'>
                <Busca 
                    dica='Digite o que deseja ver...'
                    onBuscaRealizada={this.onBuscaRealizada}/>
            </div>
        </div>
        )
    }

}

