import React from "react";
import Table from "./Table";


function table(){
const head = {
    id: 'Identidade.',
    ra: ' R.A',
    name: 'Nome.',
    educacenso: 'Educacenso',
    idade: 'Idade',
    cpf: 'CPF'


}
    const data =[

{id:1, ra: 817, name: 'Edson Lopes da Cruz', educacenso:'', data: '13/11/1988',idade: '35 anos',cpf: '01640602194'},
{id:2, ra: 816, name: 'Rafael da Silva Ramalho', educacenso:'',data: '15/01/2016',idade: '8 anos' ,cpf: '07480751192'},
{id:3, ra: 815, name: 'Maria Clara Alberto Servignani', educacenso:'',data: '12/10/2023',idade: '0 anos' ,cpf: '00873390130'},
{id:4, ra: 814, name: 'Enzo Eduardo Ferraz Rios Lopes', educacenso:'',data: '14/07/2015',idade: '9 anos' ,cpf: '09872133182'},
{id:5, ra: 813, name: 'Pietro Vieira Matias Lemos', educacenso:'',data: '06/06/2015',idade: '9 anos' ,cpf: '11825726183'},
{id:6, ra: 811, name: 'Heitor Fortine da Silva', educacenso:'',data: '08/03/2021',idade: '3 anos' ,cpf: '11096177129'},
{id:7, ra: 812, name: 'Maité Sofia da Silva Matos Oliveira', educacenso:'',data: '13/12/2018',idade: '5 anos' ,cpf: '56242599805'}
    ]
    return (
        <>
        <Table data={data} head={head}/>
        </>
    );
}

export default table;