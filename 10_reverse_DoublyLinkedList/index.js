/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {
	if(!head) {
		return head
	}

	let node = head

	while(node) {
		const { next, prev } = node

		node.next = node === head ? null : prev
		node.prev = next

		if(!next ) {
			return node
		}
		node = next 
	}
}
