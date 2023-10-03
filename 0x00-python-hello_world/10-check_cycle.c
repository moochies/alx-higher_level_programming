#include "list.h"
int check_cycle(listint_t *list)
{
	listint_t *temp;

	if (list == NULL)
		return (0);

	temp = list;
	while (1)
	{
		temp = temp->next;

		if (temp == NULL)
			return (0);
		if (temp == list)
			return (1);
	}
}
