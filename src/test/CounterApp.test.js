import React from 'react';
import CounterApp from '../CounterApp'
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
describe('Pruebas con <CounterApp/>', () => {
    const wrapper = shallow(<CounterApp></CounterApp>);
    test('Debe mostrar <CounterApp/>', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el valor por defecto de 100', () => {
        const value=100;
        const wrapper =shallow(<CounterApp value={value}></CounterApp>)
        const textoParrafo=parseInt(wrapper.find('h2').text());
        expect(textoParrafo).toBe(value);
    });
    test('Debe incrementar con el boton +1', () => {
         wrapper.find('button').at(0).simulate('click');
         const textoParrafo= wrapper.find('h2').text();
         expect(textoParrafo).toBe('11');
    })
    test('Debe incrementar con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        //wrapper.find('button').at(2).simulate('click');
        const textoParrafo= wrapper.find('h2').text();
        expect(textoParrafo).toBe('9');
   })
    
    
    
})
