import findTodos from './findTodos'


    it('Works', () => {
        expect(findTodos('123', [{name: 'hi', project: '123'},{name: 'hi3', project: '13'},{name: 'hi2', project: '123'}])).toStrictEqual([{name: 'hi', project: '123'},{name: 'hi2', project: '123'}])
    })
