const duplicateDecoder = require('./index.js')
const assert = require('assert')

describe('duplicateDecoder Challenge', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1', () => {

        let result = duplicateDecoder("din")
        let expected = "((("

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2', () => {
        let result = duplicateDecoder("recede")
        let expected = "()()()"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3', () => {
        let result = duplicateDecoder("Success")
        let expected = ")())())"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4', () => {
        let result = duplicateDecoder("(( @")
        let expected = "))(("

        assert.strictEqual(result,expected)
    })
    /**
     * TEST DESCRIPTION
     */

    it('Test5', () => {
        let result = duplicateDecoder("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
        let expected = "))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))())))))))))))))))))))))))))))))))))))))())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))(())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))"

        assert.strictEqual(result,expected)
    })
})
