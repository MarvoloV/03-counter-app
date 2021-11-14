import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'

describe('Pruebas en <PrimeraApp>', () => {
    /* test('debe de mostrar el mensaje "hola, soy Goku', () => {
        const saludo= 'Hola, soy Goku';
        const {getByText}= render (<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
        
    }) */
    test('Debe mostrar <PrimeraApp> correctamente</PrimeraApp>', () => {
      const saludo = 'Hola, Soy Goku';  
      const wrapper = shallow(<PrimeraApp saludo={saludo}/>)
      expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku'; 
        const subTitulo= 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subTitulo}
            />);
        const textoParrafo=wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);
    });
    
    
    
})

