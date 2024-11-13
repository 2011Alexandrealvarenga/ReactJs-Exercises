import {studentsList } from "@/data/students"

export const ListStudents = () =>{

    return(
      <>
      <table>
        <tr>
          <th>Name </th>
          <th>Status</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Final Grade</th>
        </tr>
        {
          studentsList.length > 0 &&
          <>
            {
              studentsList.map
              (
                student =>
                  <tr>
                    <td className="name_area">
                      <span>{student.name}</span>
                      <img src={student.avatar} />
                    </td>
                    <td>
                    {student.active === true && 'Ativo'}
                    {student.active === false && 'Inativo'} 
                      </td>
                    <td>{student.grade1}</td>
                    <td>{student.grade2}</td>
                    <td>
                      {/* arredendoa para o numero maior na ultima casa */}

                      {student.active ? (((student.grade1 + student.grade2)/2).toFixed(1)) : '--'}

                    </td>
                  </tr>
              )
            }
          </>
        }       
      </table>
      </>
    )

}