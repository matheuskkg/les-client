import faker from "faker-br"

export function selectAny(select) {
    select.then($select => {
        const $options = $select.find('option')
        const index = faker.random.number({ min: 1, max: $options.length - 1 })
        select.select($options[index].value)
    })
}