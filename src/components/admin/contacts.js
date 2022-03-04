import { getContacts } from "../../api/contacts";

const Contacts = {
    async  render() {
        const { data } = await getContacts();
        return /* html */ `${data.map((item) => `<tr class="text-gray-700">
        <td class="px-4 py-3 text-sm">
        ${item.name}
        </td>
        <td class="px-4 py-3 text-sm">
        ${item.email}
        </td>
        <td class="px-4 py-3 text-sm">
        ${item.messages}
        </td>
        <td class="px-4 py-3 text-sm">
        <div class="flex items-center space-x-4 text-sm">
        <a href="/#/admin/contacts/inbox/${item.id}"
           class="edit-product flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg focus:outline-none focus:shadow-outline-gray"
           aria-label="Edit">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
</svg>
        </a>
     </div>
    </td>
        
     </tr>`).join("")}
      `;
    },
};
export default Contacts;