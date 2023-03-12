import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm } from '../../types/form.interface'

export const FormСalculator: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  return (
    <div className="flex flex-col mx-auto my-[20vh] w-3/4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Каков профиль деятельности компании?</h1>
        <select {...register('q1', { required: true })}>
          <option value="Производство">Производство</option>
          <option value=" Торговля"> Торговля</option>
          <option value=" Выполнение работ / Оказание услуг">
            {' '}
            Выполнение работ / Оказание услуг
          </option>
          <option value=" Строительство"> Строительство</option>
          <option value=" Несколько видов деятельности ">
            {' '}
            Несколько видов деятельности{' '}
          </option>
        </select>
        <h1>
          В каком состоянии у Вас исходные данные для планирования (план продаж,
          перечень необходимого оборудования, план по персоналу, расходная часть
          и т.п.)?
        </h1>
        <select {...register('q2', { required: true })}>
          <option value="На данный момент таких данных нет, ожидаю их от специалистов по бизнес-планированию">
            На данный момент таких данных нет, ожидаю их от специалистов по
            бизнес-планированию
          </option>
          <option value=" Есть частичная/разрозненная информация">
            {' '}
            Есть частичная/разрозненная информация
          </option>
          <option value=" Часть информации собрана и структурирована, часть отсутствует">
            {' '}
            Часть информации собрана и структурирована, часть отсутствует
          </option>
          <option value="  В основном вся информация есть, нужно только ее объединить и структурировать">
            {' '}
            В основном вся информация есть, нужно только ее объединить и
            структурировать
          </option>
        </select>
        <h1>
          Требуется ли расширенная поддержка? (По умолчанию мы осуществляем
          поддержку всех проектов в течение 2 месяцев. Для ФРП, ОЭЗ, крупных
          госбанков поддержка оказывается в течение всего периода рассмотрения
          заявки на финансирование.)
        </h1>
        <select {...register('q3', { required: true })}>
          <option value="Не требуется">Не требуется</option>
          <option value=" Требуется в течение 6 месяцев">
            {' '}
            Требуется в течение 6 месяцев
          </option>
          <option value=" Требуется в течение года">
            {' '}
            Требуется в течение года
          </option>
        </select>
        <h1>Дополнительные услуги</h1>
        <input
          {...register('q4')}
          type="radio"
          value="Полиграфический дизайн бизнес-плана"
        />
        <input
          {...register('q4')}
          type="radio"
          value=" Полиграфический дизайн презентации"
        />
        <input
          {...register('q4')}
          type="radio"
          value=" Сайт проекта (лендинг, визитка)"
        />
        <input
          type="text"
          placeholder="ФИО"
          {...register('name', { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Суть проекта"
          {...register('explanation', { required: true, maxLength: 300 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Ваш телефон"
          {...register('phone', { required: true, maxLength: 12 })}
        />
        <input
          type="text"
          placeholder="Дополнительная информация"
          {...register('q5', {})}
        />

        <input type="submit" />
      </form>
    </div>
  )
}
