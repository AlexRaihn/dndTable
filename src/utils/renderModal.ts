import { h, render, type Component, type VNode } from "vue";
import BaseModal from "@/components/BaseModal.vue";

export function renderModal(
  component: Component,
  props: Record<string, unknown> = {},
  slots: Record<string, () => VNode | VNode[]> = {},
  emits: Record<string, (...args: any[]) => void> = {}
) {
  // Функция для закрытия модального окна
  const closeModal = () => {
    render(null, document.body);
  };

  // Создаём виртуальный DOM-элемент для переданного компонента
  const componentVNode = h(component, {
    ...props, // Пропсы
    close: closeModal, // Передаём функцию закрытия как пропс
    ...Object.keys(emits).reduce((acc, eventName) => {
      // Добавляем обработчики событий
      acc[`on${eventName[0].toUpperCase() + eventName.slice(1)}`] = emits[eventName];
      return acc;
    }, {} as Record<string, (...args: any[]) => void>),
  }, slots);

  // Создаём виртуальный DOM-элемент для BaseModal
  const modalVNode = h(
    BaseModal,
    {
      onClose: closeModal, // Закрытие модального окна из BaseModal
    },
    {
      default: () => componentVNode,
    }
  );

  // Рендерим модальное окно в body
  render(modalVNode, document.body);
}