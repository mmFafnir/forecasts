

export type TTab = {
    name: string,
    title: string 
}


export const tabs:TTab[] = [
    {
        name: 'all',
        title: 'Все'
    },
    {
        name: 'top',
        title: 'Топ матчи'
    }, 
    {
        name: 'today',
        title: 'Сегодня'
    }, 
    {
        name: 'next-day',
        title: 'Завтра'
    }, 
    {
        name: 'finish',
        title: 'Завершенные'
    }, 
]


export const favoritesTabs:TTab[] = [
    {
        name: 'timeline',
        title: 'Таймлайн',
    }, 
    {
        name: 'prev-day',
        title: 'Вчера',
    },
    {
        name: 'today',
        title: 'Сегодня',
    },
    {
        name: 'next-day',
        title: 'Завтра',
    },
    {
        name: 'live',
        title: 'Live',
    },
]