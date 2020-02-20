import { Router } from 'express'
import mailer from '../utils/mail'
import getDate from '../utils/getDate'
import Sequelize from 'sequelize'
import { testDirectory, directory } from '../utils/directory'

const router = Router()
const { ENV } = process.env
const agents = ENV !== 'development' ? directory : testDirectory

const sendEmails = (authDb) => {
  return router
    .post('/', async (req, res) => {
      try {  
		const date = getDate()
		console.log(`La fecha de este reporte es ${date}`)
        let data = await authDb.query(`
          SELECT
            cnum as Extension,
            cnam as Agent,
            count(cnum) as Llamadas,
            truncate(sum(billsec / 60), 2) as Minutos
          FROM
            asteriskcdrdb.cdr
          WHERE
            calldate like '${date}%'
              and cnum like '____'
              and dst like '%____%'
          GROUP BY cnum
          ORDER BY cnum asc
        `, {
          type: Sequelize.QueryTypes.SELECT
        })

        for (var agent of agents) {
          let ccList = ENV !== 'development'
            ? agent.role === 'SW'
              ? 'john@topfloormarketing.net, jose@topfloormarketing.net, lisseth@topfloormarketing.net, carlos@topfloormarketing.net'
              : 'john@topfloormarketing.net, jose@topfloormarketing.net, carlos@topfloormarketing.net'
            : 'carlos@topfloormarketing.net, ggo@topfloormarketing.net, ago@topfloormarketing.net'

          let dbAgent = data.find(u => u.Extension === agent.ext)

          await mailer({
            to: agent.email,
            cc: ccList,
            agent: dbAgent ? dbAgent.Agent : agent.name,
            calls: dbAgent ? dbAgent.Llamadas : 0,
            TalkTime: dbAgent ? dbAgent.Minutos : 0,
            formattedDate: getDate('email'),
            agentType: agent.role
          })
        }

        res.send('success')
      } catch (e) {
        console.error(e)
      }
    })
}

export default sendEmails
