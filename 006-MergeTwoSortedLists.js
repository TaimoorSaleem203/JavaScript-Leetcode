// Logic 01
class ListNode{
    constructor(x){
        this.val = x
        this.next = null
    }
}

function mergeSortList(list1,list2){
    let dummy = new ListNode(-1)
    let curr = dummy

    while(list1!==null && list2!==null){
        if(list1.val<list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }

    if(list1!=null){
        curr.next = list1
    }

    if(list2!=null){
        curr.next = list2
    }

    return dummy.next
}

function printList(head){
    let result  = []
    while(head!==null){
        result.push(head.val)   
        head = head.next
    }
    console.log(result);
}

let head1 = new ListNode(5)
head1.next = new ListNode(10)
head1.next.next = new ListNode(15)

let head2 = new ListNode(1)
head2.next = new ListNode(2)
head2.next.next = new ListNode(3)

let res = mergeSortList(head1,head2)
printList(res)