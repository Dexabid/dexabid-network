use anchor_lang::prelude::*;

declare_id!("DEXAB11111111111111111111111111111111111");

#[program]
pub mod agents {
    use super::*;

    pub fn deploy_agent(
        _ctx: Context<DeployAgent>,
        name: String,
    ) -> Result<()> {
        msg!("AI Agent deployed: {}", name);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct DeployAgent<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
