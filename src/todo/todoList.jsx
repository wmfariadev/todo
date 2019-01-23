import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRow = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success' icon='check' onClick={() => props.handleMarkeAsDone(todo)} hide={todo.done} />
                    <IconButton
                        style='warning' icon='undo' onClick={() => props.handleMarkeAsPending(todo)} hide={!todo.done} />
                    <IconButton
                        style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRow()}
            </tbody>
        </table>
    )
}