import { callback_manageTasks } from './index.js'

const radialBtnsMenu = (() => {
    function makeRadialMenu() {
        // Button container
        const showTasksSelector = document.createElement('div')
        showTasksSelector.classList.add('radio-btn-container')
        const showTasksFieldset = document.createElement('fieldset')
        showTasksFieldset.classList.add('fieldset')
        const legendFieldset = document.createElement('fieldset-legend')
        legendFieldset.innerHTML = 'View tasks: '

        showTasksFieldset.appendChild(legendFieldset)
        showTasksSelector.appendChild(showTasksFieldset)

        // First radial button
        const item1 = document.createElement('div')
        item1.classList.add('rd-item')

        const btnAllTasks = document.createElement('input')
        btnAllTasks.type = 'radio'
        btnAllTasks.id = 'rd-all'
        btnAllTasks.name = 'show-tasks'
        btnAllTasks.value = 'all'
        btnAllTasks.checked = true
        btnAllTasks.disabled = true

        const labelAll = document.createElement('label')
        labelAll.for = 'rd-all'
        labelAll.textContent = 'all'

        // Second radial button
        const item2 = document.createElement('div')
        item2.classList.add('rd-item')

        const btnFinishedTasks = document.createElement('input')
        btnFinishedTasks.type = 'radio'
        btnFinishedTasks.id = 'rd-finished'
        btnFinishedTasks.name = 'show-tasks'
        btnFinishedTasks.value = 'finished'
        btnFinishedTasks.disabled = true

        const labelFinished = document.createElement('label')
        labelFinished.for = 'rd-finished'
        labelFinished.textContent = 'finished'

        // Third radial button
        const item3 = document.createElement('div')
        item3.classList.add('rd-item')

        const btnPendingTasks = document.createElement('input')
        btnPendingTasks.type = 'radio'
        btnPendingTasks.id = 'rd-pending'
        btnPendingTasks.name = 'show-tasks'
        btnPendingTasks.value = 'pending'
        btnPendingTasks.disabled = true

        const labelPending = document.createElement('label')
        labelPending.for = 'rd-pending'
        labelPending.textContent = 'pending'

        // Put all elements together
        item1.appendChild(btnAllTasks)
        item1.appendChild(labelAll)
        item2.appendChild(btnFinishedTasks)
        item2.appendChild(labelFinished)
        item3.appendChild(btnPendingTasks)
        item3.appendChild(labelPending)

        showTasksFieldset.appendChild(item1)
        showTasksFieldset.appendChild(item2)
        showTasksFieldset.appendChild(item3)

        return showTasksSelector
    }

    function get_radialButtonInput() {
        const rdBtnAll = document.getElementById('rd-all')
        const rdBtnFinished = document.getElementById('rd-finished')
        const rdBtnPending = document.getElementById('rd-pending')

        let statusBtnAll = rdBtnAll.checked
        let statusBtnFinished = rdBtnFinished.checked
        let statusBtnPending = rdBtnPending.checked

        return [statusBtnAll, statusBtnFinished, statusBtnPending]
    }

    function processTasksToShow(tasks) {
        let radialStatus = get_radialButtonInput()

        let tmp = tasks

        if (typeof tasks !== 'undefined') {
            tmp = tasks.sort(function (a, b) {
                return Number(a[5]) - Number(b[5])
            })

            if (radialStatus[1] == true) {
                tmp = tasks.filter(function (e) {
                    return e[5] == true
                })
            } else if (radialStatus[2] == true) {
                tmp = tasks.filter(function (e) {
                    return e[5] == false
                })
            }
        }

        return tmp
    }

    function enableRadianButtons() {
        const rdBtnAll = document.getElementById('rd-all')
        const rdBtnFinished = document.getElementById('rd-finished')
        const rdBtnPending = document.getElementById('rd-pending')

        rdBtnAll.disabled = false
        rdBtnFinished.disabled = false
        rdBtnPending.disabled = false
    }

    function disableRadianButtons() {
        const rdBtnAll = document.getElementById('rd-all')
        const rdBtnFinished = document.getElementById('rd-finished')
        const rdBtnPending = document.getElementById('rd-pending')

        rdBtnAll.disabled = true
        rdBtnFinished.disabled = true
        rdBtnPending.disabled = true
    }

    function listenerRadialMenu() {
        const rdBtnAll = document.getElementById('rd-all')
        const rdBtnFinished = document.getElementById('rd-finished')
        const rdBtnPending = document.getElementById('rd-pending')

        rdBtnAll.addEventListener('click', callback_manageTasks)
        rdBtnFinished.addEventListener('click', callback_manageTasks)
        rdBtnPending.addEventListener('click', callback_manageTasks)
    }

    return {
        makeRadialMenu,
        listenerRadialMenu,
        get_radialButtonInput,
        processTasksToShow,
        enableRadianButtons,
        disableRadianButtons,
    }
})()

export default radialBtnsMenu